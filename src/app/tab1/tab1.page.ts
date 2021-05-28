import { Component, Input } from '@angular/core';
import { Map } from 'leaflet';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { EditPage } from '../pages/edit/edit.page';
import { ShowRoutePage } from '../pages/show-route/show-route.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private paraTi = false;
  private rutas = true;
  private friends: User[] = [];
  public routes = [];
  public friendsRoutes = [];
  private you: User;
  public mapas: Map[] = [];
  public line: any;
  public flagLike = false;

  constructor(
    private toast: ToastService,
    public modalcontroller: ModalController,
    private alert: AlertController,
    private http: HttpService,
    private authS: AuthService,
    private camera: Camera,
    private router: Router) {
    this.you = this.authS.getUser();
    if (this.you.avatar == undefined || this.you.avatar == null) {
      this.you.avatar = "assets/icon/usuario.svg"
    }
  }

  ionViewWillEnter() {
    this.getOwnRoutes();
  }

  public changeIcon(){
    this.toast.createToastTop("Disponible proximamente!!", true, 350, "primary");
  }

  public pestanaParaTi() {
    if (!this.paraTi) {
      this.rutas = false;
      this.paraTi = true;
      this.getFriends();
    }
  }

  public pestanaRutas() {
    if (!this.rutas) {
      this.paraTi = false;
      this.rutas = true;
      this.getOwnRoutes();

    }
  }

  public getOwnRoutes() {
    this.routes = [];
    this.mapas = [];
    this.line = null;
    if (this.you.id != -1) {
      this.http.getRoutes(this.you.id).then((data) => {
        if (data) {
          let dat = JSON.parse(data.data);
          if (dat.status == "0") {
            //todo ok
            dat.result.forEach(async element => {
              let route = {
                id: element.id,
                title: element.title,
                username: this.you.username,
                avatar: this.you.avatar,
                coordinates: element.coordinates,
                waterLevel: element.level
              }
              this.routes.push(route);
            });
          }
        }
      }).catch((err) => {
        this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
      });
    }
  }

  public getFriends() {
    this.friends = [];
    this.http.getFriends(this.you.id).then((data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          //Todo ok
          dat.result.forEach(element => {
            let aux = {
              id: element.id,
              username: element.username,
              avatar: element.avatar
            }
            if (aux.avatar == undefined) {
              aux.avatar = "assets/icon/usuario.svg"
            }
            this.friends.push(aux);
            this.getFriendsRoutes();
          });
        }
      }
    }).catch((err) => {
      this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
    });
  }

  public getFriendsRoutes() {
    let aux = [];
    let flag = true;
    if (this.friends.length > 0) {
      this.friends.forEach((friend) => {
        this.http.getRoutes(friend.id).then((data) => {
          if (data) {
            let dat = JSON.parse(data.data);
            if (dat.status == "0") {
              //todo ok
              dat.result.forEach(element => {
                let route = {
                  id: element.id,
                  title: element.title,
                  username: friend.username,
                  avatar: friend.avatar,
                  coordinates: element.coordinates,
                  waterLevel: element.level
                }
                aux.push(route);
              });

              this.friendsRoutes = aux.filter(this.onlyUnique);

            }
          }
        }).catch((err) => {
          //toast
          this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
        });
      });
    }
  }

  public onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  public async goShowRoute(route){
    const modal = await this.modalcontroller.create({
      component: ShowRoutePage,
      cssClass: 'my-custom-class',
      componentProps: {
        route: route
      }
    });
    return await modal.present();
  }

  public async editaRuta(route) {
    const modal = await this.modalcontroller.create({
      component: EditPage,
      cssClass: 'my-custom-class',
      componentProps: {
        route: route
      }
    });
    return await modal.present();
  }

  public async confirmDelete(route){
    const alert = await this.alert.create({
      cssClass: "custom",
      header: "Borrar " + route.title,
      subHeader: "¿Seguro que desea borrar su ruta?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            alert.dismiss();
          }
        },
        {
          text: "Si",
          handler: async () => {
            await this.deleteRoute(route);
            await this.getOwnRoutes();
          }
        }
      ]
    });
    await alert.present();
  }

  public async deleteRoute(route){
    this.http.deleteRoute(route.id).then((data)=>{
      if(data){
        let dat = JSON.parse(data.data);
        if(dat.status = "0"){
          this.toast.createToastBottom("Ruta borrada con éxito", true, 350, "primary");
        }else{
          this.toast.createToastBottom("Error borrando ruta", true, 350, "warning");
        }
      }
    }).catch(err=>{
      this.toast.createToastBottom("Error de conexión, pruebe más tarde ", true, 350, "warning");
    })
  }


}
