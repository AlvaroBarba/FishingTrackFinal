import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  public async createToastTop(msg:string, animation:boolean, time:number, color:string){
    let cToast = await this.toast.create({
      message: msg,
      animated: animation,
      duration: time,
      position: "top",
      color: color,
      mode: "ios"
    });
    await cToast.present();
  }

  public async createToastBottom(msg:string, animation:boolean, time:number, color:string){
    let cToast = await this.toast.create({
      message: msg,
      animated: animation,
      duration: time,
      position: 'bottom',
      color: color,
      mode: "ios"
    });
    await cToast.present();
  }

  public async createToastMiddle(msg:string, animation:boolean, time:number, color:string){
    let cToast = await this.toast.create({
      message: msg,
      animated: animation,
      duration: time,
      position: 'middle',
      color: color,
      mode: "ios"
    });
    await cToast.present();
  }
}
