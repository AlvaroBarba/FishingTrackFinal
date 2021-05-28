import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user: User;
  public tasks: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalcontroller: ModalController,
    private authService: AuthService,
    private http: HttpService,
    private toastS: ToastService,
    private loading: LoadingService) {
    this.tasks = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  ngOnInit() {
    
  }

  public async login() {
    //Creando Loading
    await this.loading.createLoading();
    //Buscando Usuario
      this.http.getUser(this.tasks.get('username').value, this.tasks.get('password').value).then(async (data) => {
      if (data) {
        let dat = JSON.parse(data.data);
        if (dat.status == "0") {
          //Todo ok
          this.user = {
            id: dat.result.id,
            username: dat.result.username,
            avatar: dat.result.avatar
          }
          await this.authService.login(this.user);
          this.dismissLogin();
        } else {
          //Error buscando usuario
          this.user = {
            id: -1,
            username: ''
          }
          await this.toastS.createToastBottom("Usuario o contraseña incorrectos", true, 400, "danger");
        }
      }
      await this.loading.cancelLoading();
    }).catch(async (err) => {
      this.user = {
        id: -1,
        username: ''
      }
      //Toast
      await this.toastS.createToastBottom("Tiempo de espera agotado... intentelo más tarde", true, 400, "danger");
      await this.loading.cancelLoading();
    })

  }

  public dismissLogin(){
    this.modalcontroller.dismiss();
  }


}
