import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  routeEdit:FormGroup;
  @Input() route;
  level: string;

  constructor(
    private formBuilder: FormBuilder,
    private loading: LoadingService,
    private toastS: ToastService,
    public modalController: ModalController,
    public http: HttpService,
    private navctrl: NavController) {
      this.routeEdit = this.formBuilder.group({
        title: ['', Validators.required],
        waterLevel: ['', Validators.required]
      });

     }

  ngOnInit() {

    switch(this.route.waterLevel){
      case 1:
        this.level = "Óptimo"
        break;
      case 2:
        this.level = "Medio"
        break;
      case 3:
        this.level = "Bajo"
        break;
      default:
        this.level = "Sin datos..."
        break;

    }
  }

  public getLevel(level:string){
    level = level.toLowerCase();
    switch(level){
      case 'optimo':
        return 1;
        break;
      case 'medio':
        return 2;
        break;
      case 'bajo':
        return 3;
        break;
      default:
        return 2;
    }
  }

  public async editRoute(){
    //Creando Loading
    await this.loading.createLoading();
    //Añadir nuevo usuario
    this.http.updateRoute(this.route.id, this.routeEdit.get("title").value, this.getLevel(this.routeEdit.get("waterLevel").value)).then(async (data)=>{
      if (data) {
        let dat = JSON.parse(data.data);
        if(dat.status=="0"){
          //Todo ok
          this.toastS.createToastBottom("Actualizado correctamente!", true, 350, "success");
          this.modalController.dismiss();
        }else{
          //Error
          await this.toastS.createToastBottom("Fallo al actualizar 1", true, 400, "danger");
          this.modalController.dismiss();
        }
      }
      //Eliminando loading
      await this.loading.cancelLoading();
    }).catch(async (err) =>{
      //toast
      await this.toastS.createToastBottom("Fallo al actualizar 2", true, 400, "danger");
      this.modalController.dismiss();

      //Eliminando loading
      await this.loading.cancelLoading();
    }
    )}


  public goBack() {
    this.modalController.dismiss();
  }



}
