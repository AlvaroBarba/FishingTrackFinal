import { Component, Input } from '@angular/core';
import { Map } from 'leaflet';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { Camera } from '@ionic-native/camera/ngx';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private paraTi = true;
  private fotos = false;
  private rutas = false;
  private friends: User[] = [];
  public routes = [];
  public friendsRoutes = [];
  private you: User;
  public mapas: Map[] = [];
  public line: any;

  constructor(
    private toast: ToastService,
    private http: HttpService,
    private authS: AuthService,
    private camera: Camera) {
    this.you = this.authS.getUser();
  }

  ionViewWillEnter() {
    this.paraTi = true;
    this.pestanaParaTi();
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
            dat.result.forEach(element => {
              let route = {
                title: element.title,
                username: this.you.username,
                avatar: this.you.avatar,
                coordinates: element.coordinates

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
    if (this.friends.length > 0) {
      this.friends.forEach((friend) => {
        this.http.getRoutes(friend.id).then((data) => {
          if (data) {
            let dat = JSON.parse(data.data);
            if (dat.status == "0") {
              //todo ok
              let route = {
                title: dat.result.title,
                username: friend.username,
                avatar: friend.avatar,
                coordinates: dat.result.coordinates
              }
              this.friendsRoutes.push(route);
            }
          }
        }).catch((err) => {
          //toast
          this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
        });
      });
    }
  }
}
