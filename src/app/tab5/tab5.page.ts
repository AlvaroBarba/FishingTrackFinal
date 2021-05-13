import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';
import { LoadingService } from '../services/loading.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  searchB = false;
  searchBar = false;
  users: User[] = [];
  friendReq: User[] = [];
  friendList: User[] = [];
  user: User;
  search = false;
  list = true;
  requests = false;
  you: User;
  yourFriends = [];

  constructor(
    private http: HttpService,
    private toast: ToastService,
    private authS: AuthService) {
    this.you = this.authS.getUser();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getFriends();
    this.friendRequest();
  }

  public goSearch() {
    if (!this.search) {
      this.list = false;
      this.requests = false;
      this.search = true;
      this.searchB = true;
    }
  }

  public goList() {
    if (!this.list) {
      this.search = false;
      this.requests = false;
      this.list = true;
      this.getFriends();
    }
  }

  public goRequest() {
    if (!this.requests) {
      this.list = false;
      this.search = false;
      this.requests = true;
      this.friendRequest();
    }
  }

  showSearch() {
    this.searchBar = true;
  }

  closeSearch() {
    this.searchBar = false;
  }

  public getFriends() {
    this.friendList = [];
    this.http.getFriends(this.you.id).then((data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          dat.result.forEach(element => {
            if (element.avatar == undefined) {
              element.avatar = "assets/icon/usuario.svg";
            }
            this.friendList.push(element);
          });
        }
      }
    }).catch((err) => {
      this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
    })
  }

  public acceptFriend(id) {
    this.http.updateFriend(id, 2, this.you.id).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          await this.friendRequest();
          this.toast.createToastMiddle("Bien hora sois amigos!!", true, 350, "success");
        } else {
          //Error
        }
      }
    }).catch((err) => {
      this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
    })
  }

  public deleteFriend(id) {
    this.http.deleteFriend(this.you.id, id).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          await this.getFriends();
          this.toast.createToastMiddle("Dejasteis de ser amigos", true, 350, "warning");
        } else {
          //Error
        }
      }
    }).catch((err) => {
      this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
    })
  }

  public rejectFriend(id) {
    this.http.updateFriend(id, 3, this.you.id).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          await this.friendRequest();
          this.toast.createToastMiddle("Rechazaste la petición", true, 350, "warning");
        } else {
          //Error
        }
      }
    }).catch((err) => {
      this.toast.createToastBottom("Revise su conexión a internet...", true, 400, "warning");
    })
  }

  public async searchFriend(evt: any) {
    const val = evt.target.value;
    this.users = [];
    let aux: User[] = [];
    if (val && val.trim() != '') {
      this.http.getUserByUsername(val).then(async (data) => {
        if (data) {
          let dat = JSON.parse(data.data);
          if (dat.status == "0") {
            //Todo ok
            dat.result.forEach(element => {
              if (element.id != this.you.id) {
                if (element.avatar == undefined) {
                  element.avatar = "assets/icon/usuario.svg";
                }
                element.isFriend = false;
                aux.push(element);
              }
            });

            this.users = aux;
            await this.isFriend();

          }
        } else {
          //Error buscando usuario
          await this.toast.createToastBottom("No hay coincidencias", true, 400, "danger");
        }

      }).catch(async (err) => {
        //Toast
        await this.toast.createToastBottom("No hay coincidencias", true, 400, "danger");
      });
    }
  }

  public sendFriendRequest(u2) {
    let user1 = this.you;
    this.http.addFriendRequest(user1.id, u2.id, 1).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          await this.toast.createToastBottom("Petición enviada con éxito", true, 300, "success");
        }
      }
    }).catch(async (err) => {
      await this.toast.createToastBottom("Error enviando petición pruebe más tarde", true, 400, "danger");
    })
  }

  public isFriend() {
    this.users.forEach(element => {
      this.friendList.forEach(data =>{
        if(element.username == data.username){
          this.users[this.users.indexOf(element)].isFriend = true;
        }
      })
    });
  }

  public friendRequest() {
    this.user = this.authS.getUser();
    this.friendReq = [];
    this.http.getFriendRequest(this.user.id).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          //Todo ok
          dat.result.forEach(element => {
            if (element.avatar == undefined) {
              element.avatar = "assets/icon/usuario.svg";
            }
            this.friendReq.push(element);
          });
        }
      }
    }).catch(async (err) => {
      //Toast
      await this.toast.createToastBottom("Fallo al cargar peticiones de amistad", true, 400, "danger");
    })
  }
}
