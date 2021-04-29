import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { element } from 'protractor';
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

  public async searchFriend(evt: any) {
    const val = evt.target.value;
    this.users = [];
    console.error(val);
    if (val && val.trim() != '') {
      console.log("antes del http");
      this.http.getUserByUsername(val).then(async (data) => {
        if (data) {
          let dat = JSON.parse(data.data);
          if (dat.status == "0") {
            //Todo ok
            dat.result.forEach(element => {
              console.log(element);
              this.users.push(element);
            });
          }
        } else {
          //Error buscando usuario
          await this.toastS.createToastBottom("No hay coincidencias 1", true, 400, "danger");
        }
        
      }).catch(async (err) => {
        //Toast
        await this.toastS.createToastBottom("No hay coincidencias 2", true, 400, "danger");
        console.log(err);
      })
    }
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
