import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingC: LoadingController) { }

  public async createLoadingMsg(msg:string){
    const loading = await this.loadingC.create({
      message: msg,
      spinner: 'dots',
      mode: 'ios',
      translucent: true
    });

    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  public async createLoading(){
    const loading = await this.loadingC.create({
      spinner: 'dots',
      mode: 'ios',
      translucent: true
    });

    await loading.present();
  }

  public cancelLoading(){
    this.loadingC.dismiss();
  }
}
