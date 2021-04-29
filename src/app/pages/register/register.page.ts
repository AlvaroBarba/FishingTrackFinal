import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public user:User;
  public regist: FormGroup;

  constructor(private modalcontroller: ModalController,
    private formBuilder: FormBuilder,
    private http: HttpService,
    private authService: AuthService,
    private loading: LoadingService,
    private toastS: ToastService) {
    this.regist = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

  ngOnInit() {
  }

  public dismissRegister(){
    this.modalcontroller.dismiss();
  }

  public async registration(){
    //Creando Loading
    await this.loading.createLoading();
    //Añadir nuevo usuario
    this.http.addUser(this.regist.get("username").value, this.regist.get("password").value).then(async (data)=>{
      if (data) {
        let dat = JSON.parse(data.data);
        if(dat.status=="0"){
          //Todo ok
          this.user={
            id:dat.result,
            username:this.regist.get("username").value
          }
          await this.authService.login(this.user);
          this.dismissRegister();
        }else{
          //Error
          this.user={
            id:-1,
            username:""
          }
          await this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");
        }
      }
      //Eliminando loading
      await this.loading.cancelLoading();
    }).catch(async (err) =>{
      this.user = {
        id: -1,
        username: ''
      }
      //toast
      await this.toastS.createToastBottom("Usuario en uso...", true, 400, "danger");

      //Eliminando loading
      await this.loading.cancelLoading();
      console.error(err);
    }
    )}

}
