import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';
import { LoadingService } from '../services/loading.service';
import { HTTP } from '@ionic-native/http/ngx';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  usuario: User;
  nRoutes: number;
  myphoto: any;
  userAvatar:any;
  isLoading = false;

  constructor(
    private toast: ToastService,
    private authS: AuthService,
    private router: Router,
    private loading: LoadingService,
    private camera: Camera,
    private http: HttpService,
    private Http: HTTP) {
    this.usuario = authS.getUser();
  }

  ngOnInit() {
    this.avatar();
    this.getCountRoutes();
  }

  public getCountRoutes() {
    this.nRoutes = 0;
    this.http.getCountRoutes(this.usuario.id).then((data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          dat.result.forEach(element => {
            this.nRoutes = element.rutas
          });
        }
      }
    }).catch((err) => { });
  }

  public async logout() {
    await this.authS.logout();
    if (!this.authS.isLogged()) {
      this.router.navigate(['/welcome'])
    }
  }

  public avatar() {
    if (this.usuario.avatar == undefined || this.usuario.avatar == "") {
      this.myphoto = "assets/icon/usuario.svg";
    } else {
      this.myphoto = "https://fishingtrack.duckdns.org:3022/avatar/"+this.usuario.avatar;
    }
  }


  public async onFileSelected($event) {
    this.userAvatar = $event.target.files[0];
    await this.updateUserAvatar();
  }

  public async updateUserAvatar() {
    let formData: FormData = new FormData();
    formData.append('avatar',this.userAvatar,this.userAvatar.filename);
    await this.loading.createLoading();
    this.Http.setDataSerializer('multipart');
    this.http.avatar(this.authS.getUser().id, formData).then(async (data) => {
      let dat = JSON.parse(data.data);
      if(dat.status == "1"){
        this.usuario.avatar = dat.result
        await this.authS.saveUser(this.usuario);
        await this.toast.createToastBottom("Se ha actualizado la foto de perfil",true, 350 ,"success");
      } else {
        await this.toast.createToastBottom("No se ha podido actualizar la foto", true, 350,"danger");
      }
      await this.loading.cancelLoading();
    }).catch(async (err) => {
      await this.loading.cancelLoading();
    });
    this.Http.setDataSerializer('urlencoded');
  }

}
