import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationLocationProvider, BackgroundGeolocationProvider, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { Map, Polyline, tileLayer } from 'leaflet';
import { addListener } from 'process';
import { User } from '../model/User';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundGeoService {

  line: any;
  flag = true;
  polyline: Polyline;
  mapa: Map;
  coordinates: {
    lat: any,
    lng: any
  };
  user: User;
  route: {
    id: any,
    title: string,
    polyline: any
  };
  i: number = 0;
  created = false;

  config: BackgroundGeolocationConfig = {
    desiredAccuracy: 10,
    stationaryRadius: 20,
    distanceFilter: 5,
    debug: false, //  Activa un sonido mientras este activa, para poder comprobar su funcionamiento
    stopOnTerminate: true, // borrar configuracion cuando la app termine(true)
    notificationText: "Localizacion activada...",
    locationProvider: BackgroundGeolocationLocationProvider.RAW_PROVIDER,
    startForeground: true,
    interval: 2000,
    fastestInterval: 1000
  };


  constructor(
    private geolocation: BackgroundGeolocation,
    private toast: ToastService,
    private http: HttpService,
    private alert: AlertController,
    private authS: AuthService) {
    this.setDefaultPolyline();
    this.user = this.authS.getUser();
  }

  public setDefaultPolyline() {
    this.coordinates = {
      lat: undefined,
      lng: undefined
    }
    if (!this.created) {
      this.polyline = new Polyline([], {
        color: "red",
        opacity: 0.5,
        weight: 2.5
      });
    } else {
      this.polyline = new Polyline([], {
        color: "red",
        opacity: 0.5,
        weight: 2.5
      }).addTo(this.mapa);
    }
  }



  gps = this.geolocation.configure(this.config).then((response: BackgroundGeolocationResponse) => {
    this.geolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {

      if (!this.flag) {
        this.coordinates = {
          lat: location.latitude,
          lng: location.longitude
        }
        if (this.coordinates && this.created) {
          this.drawPolyline(this.coordinates);
          this.mapa.setView(this.coordinates);
        }
      }

    });
    this.geolocation.start();
    //this.geolocation.finish(); // SOLO IOS
  });


  public startBackgroundGeolocation() {
    this.geolocation.start();
    this.flag = false;
  }

  public async stopBackgroundGeolocation() {
    this.geolocation.stop();
    await this.waterLevel();
    this.flag = true;
  }

  public async routeTitle(level: number) {
    const alert = await this.alert.create({
      cssClass: "custom",
      header: "Guardar Ruta",
      subHeader: "Titulo de la ruta",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Título",
          id: "routeTitle"
        }
      ],
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            this.mapa.removeLayer(this.polyline);
            this.setDefaultPolyline();
          }
        },
        {
          text: "Si",
          handler: (data) => {
            this.saveRoute(data.title, level);
            this.mapa.removeLayer(this.polyline);
            this.setDefaultPolyline();
          }
        }
      ]
    });
    await alert.present();
  }

  public async waterLevel() {
    let selected = -1;
    const alertWater = await this.alert.create({
      cssClass: "custom",
      header: "Nivel del agua",
      subHeader: "Elija el nivel del agua actual",
      inputs: [
        {
          name: "highLevel",
          type: "radio",
          label: "Nivel Optimo",
          value: "1",
          checked: true
        },
        {
          name: "mediunLevel",
          type: "radio",
          label: "Nivel Medio",
          value: "2"
        },
        {
          name: "lowLevel",
          type: "radio",
          label: "Nivel Bajo",
          value: "3"
        }
      ],
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            this.mapa.removeLayer(this.polyline);
            this.setDefaultPolyline();
          }
        },
        {
          text: "Si",
          handler: (data: number) => {
            selected = data;
            this.mapa.removeLayer(this.polyline);
            this.setDefaultPolyline();
          }
        }
      ]
    });
    await alertWater.present();
    alertWater.onDidDismiss().then(() => {
      this.routeTitle(selected);
    });
  }

  public saveRoute(title, level) {
    let input = this.polyline.toGeoJSON();
    this.http.addRoute(this.user.id, title, input, level).then((data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          //Todo ok
          this.setDefaultPolyline();
        } else {
          //Error guardando ruta
          this.toast.createToastBottom("Error al guardar la ruta...", true, 400, "Danger");
        }
      }
    }).catch(err => {
      this.toast.createToastBottom("Tiempo de espera agotado...", true, 400, "Danger");
    });
  }

  public drawPolyline(location) {
    this.polyline.addTo(this.mapa);
    this.polyline.addLatLng(location);
  }

  public createMap() {
    this.created = true;
    this.mapa = new Map("mapa").locate({ setView: true, maxZoom: 20 });
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.mapa);
    setTimeout(() => {
      this.mapa.invalidateSize();
    }, 400);
    return this.mapa;
  }

}
