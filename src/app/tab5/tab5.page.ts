import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { element } from 'protractor';
import { threadId } from 'worker_threads';
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
  friendReq:User[]=[];
  friendList:User[]=[];
  user:User;
  search = false;
  list = true;
  requests = false;
  you:User;


  constructor(private http: HttpService,
    private toastS: ToastService,
    private loading: LoadingService,
    private authS: AuthService) {
      this.you = this.authS.getUser();
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
      this.getFriends();
      this.friendRequest();
  }

  public goSearch(){
    if(!this.search){
      this.list=false;
      this.requests = false;
      this.search = true;
      this.searchB = true;
    }
  }

  public goList(){
    if(!this.list){
      this.search=false;
      this.requests = false;
      this.list = true;
      this.getFriends();
    }
  }

  public goRequest(){
    if(!this.requests){
      this.list=false;
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

  public getFriends(){
    this.friendList = [];
    this.http.getFriends(this.you.id).then((data)=>{
      if(data){
        let dat = JSON.parse(data.data);
        if(dat.status=="0"){
          dat.result.forEach(element => {
            if(element.avatar == undefined){
              element.avatar = "assets/icon/usuario.svg";
            }
            this.friendList.push(element);
          });
        }
      }
    }).catch((err)=>{

    })
  }


  public acceptFriend(id){
    this.http.updateFriend(id, 2, this.you.id).then((data)=>{
      if(data){
        let dat = JSON.parse(data.data);
        if(dat.status=="0"){
          //Toast ahora sois amigos
        }else{
          //Error
        }
      }
      }).catch((err)=>{
        console.error("Fallo al aceptar la peticion");
      })
  }

  public rejectFriend(id){
    this.http.updateFriend(id, 3, this.you.id).then((data)=>{
      if(data){
        let dat = JSON.parse(data.data);
        if(dat.status=="0"){
          //Toast rechazo petición
        }else{
          //Error
        }
      }
      }).catch((err)=>{
        console.error("Fallo al rechazar la peticion");
      })
  }

  public async searchFriend(evt: any) {
    const val = evt.target.value;
    this.users = [];
    let aux: User[] = [];
    let result;
    if (val && val.trim() != '') {
      this.http.getUserByUsername(val).then(async (data) => {
        if (data) {
          let dat = JSON.parse(data.data);
          if (dat.status == "0") {
            //Todo ok
            dat.result.forEach(element => {
              if(element.id != this.you.id){
                    if(element.avatar == undefined){
                      element.avatar = "assets/icon/usuario.svg";
                    }
                    aux.push(element);
              }
            });
            //aux ALBA, ALVARO, ANDREA

            this.friendList.forEach(friend => {
              //friendlist ALVARO
              let i = aux.indexOf(aux.find( x => friend));
              aux.splice(i, 1);
            });

            const set = new Set(aux);
            result = [...set];
            this.users = result;
          }
        } else {
          //Error buscando usuario
          await this.toastS.createToastBottom("No hay coincidencias", true, 400, "danger");
        }
        
      }).catch(async (err) => {
        //Toast
        await this.toastS.createToastBottom("No hay coincidencias", true, 400, "danger");
        console.log(err);
      })
    }
  }

  public sendFriendRequest(u2){
    let user1 = this.you;
    this.http.addFriendRequest(user1.id, u2.id, 1).then(async (data) =>{
      if(data) {
        let dat = JSON.parse(data.data);
        if(dat.status == "0"){
            await this.toastS.createToastBottom("Petición enviada con éxito", true, 300, "success");
        }
      }
    }).catch(async (err) => {
      await this.toastS.createToastBottom("Error enviando petición pruebe más tarde", true, 400, "danger");      
    })
  }

  public friendRequest(){
    this.user = this.authS.getUser();
    this.friendReq = [];
    this.http.getFriendRequest(this.user.id).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          //Todo ok
          dat.result.forEach(element => {
            if(element.avatar == undefined){
              element.avatar = "assets/icon/usuario.svg";
            }
            this.friendReq.push(element);
          });
        }
      }
    }).catch(async (err) => {
      //Toast
      await this.toastS.createToastBottom("Fallo al cargar peticiones de amistad", true, 400, "danger");
      console.log(err);
    })
  }

}
