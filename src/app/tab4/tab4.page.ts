import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { PopoverService } from '../services/popover.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  usuario : User;
  
  myphoto:any;

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(
    private popover:PopoverService,
    private authS: AuthService, 
    private router: Router, 
    private camera: Camera,
    private http:HttpService  ) { 
    this.usuario = authS.getUser();
  }



  ngOnInit() {
    this.avatar();
  }

  async showPopover(ev){
    this.popover.createPopover(ev);
  }

  public async logout(){
    await this.authS.logout();
    if(!this.authS.isLogged()){
      this.router.navigate(['/welcome'])
    }
  }

  public avatar(){
    if(this.usuario.avatar == undefined || this.usuario.avatar == ""){
      this.myphoto = "assets/icon/usuario.svg";
    }else{
      this.myphoto = this.usuario.avatar;
    }
   }

   public newAvatar(photo){
     this.http.addAvatar(photo, this.usuario.id).then((data)=>{
       if(data){
         let dat = JSON.parse(data.data);
         if(dat.status!="0"){
           //Error
           //toast error al subir foto
           console.error("Error subiendo foto...");
         }
       }
     })
   }

   getImage():Promise<void> {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    return this.camera.getPicture(options).then((imageData) => {
       this.myphoto = 'data:image/jpeg;base64,' + imageData;
       this.newAvatar(this.myphoto);
          }, (err) => {
      console.log(err)
    });
  }

  public newPhoto(photo){
    this.http.addPhoto(this.usuario.id,"titulo","prueba",photo ).then((data)=>{
      if(data){
        let dat = JSON.parse(data.data);
        if(dat.status!="0"){
          //Error
          //toast error al subir foto
          console.error("Error subiendo foto...");
        }
      }
    })
  }


  insertImagen():Promise<void> {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    return this.camera.getPicture(options).then((imageData) => {
       this.myphoto = 'data:image/jpeg;base64,' + imageData;
       this.newPhoto(this.myphoto);
          }, (err) => {
      console.log(err)
    });
  }

}
