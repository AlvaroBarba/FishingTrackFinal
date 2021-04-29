import { Injectable } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationLocationProvider, BackgroundGeolocationProvider, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';
import { Map, Polyline, tileLayer } from 'leaflet';
import { addListener } from 'process';
import { User } from '../model/User';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BackgroundGeoService {

  line: any;
  flag = true;
  polyline: Polyline;
  mapa: Map;
  coordinates:{
    lat:any,
    lng:any
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
    notificationText:"Localizacion activada...",
    locationProvider: BackgroundGeolocationLocationProvider.RAW_PROVIDER,
    startForeground: true,
    interval: 2000,
    fastestInterval: 1000
  };


  constructor(private geolocation: BackgroundGeolocation,
    private storage: NativeStorage,
    private http: HttpService,
    private alert: AlertController,
    private authS: AuthService) {
      this.setDefaultPolyline();
    this.user = this.authS.getUser();
  }

  public setDefaultPolyline(){
    this.coordinates={
      lat: null,
      lng: null
    }
    if(!this.created){
      this.polyline = new Polyline([], {
        color: "red",
        opacity: 0.5,
        weight: 2.5
      });
    }else{
      this.polyline = new Polyline([], {
        color: "red",
        opacity: 0.5,
        weight: 2.5
      }).addTo(this.mapa);
    }
  }



  gps = this.geolocation.configure(this.config).then((response: BackgroundGeolocationResponse) => {
    console.log(response);
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
    const alert = await this.alert.create({
      cssClass: "custom",
      header: "Guardar Ruta",
      subHeader:"Titulo de esta ruta",
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
            this.saveRoute(data.title);
            this.mapa.removeLayer(this.polyline);
            this.setDefaultPolyline();
          }
        }
      ]
    });
    await alert.present();
    this.flag = true;
  }

  public saveRoute(title) {
    let input = this.polyline.toGeoJSON();
      this.http.addRoute(this.user.id, title, input).then((data)=>{
        if (data) {
          let dat = JSON.parse(data.data);
          if (dat.status == "0") {
            //Todo ok
            this.setDefaultPolyline();
          } else {
            //Error buscando usuario
            console.error(dat.result);
          }
        }
      }).catch(err=>{
        console.error(err);
      });
    }

  public drawPolyline(location) {
    console.log(location);
    this.polyline.addTo(this.mapa);
    this.polyline.addLatLng(location);
  }

  public createMap() {
    this.created = true;
    this.mapa = new Map("mapa").locate({ setView: true, maxZoom: 20 });
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
      .addTo(this.mapa);
    setTimeout(() => {
      this.mapa.invalidateSize();
    }, 400);
    return this.mapa;
  }

}
