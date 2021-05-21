import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {

  public logged = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
    });
  }

  //SOCIAL MEDIA

  public goInfoPage(){
    this.router.navigate(['/info']);
  }

  public checkURL():boolean{
    if("/login" == this.router.url || "/welcome" == this.router.url || "/register" == this.router.url){
      this.logged = false;
    }else{
      this.logged = true;
    }

    return this.logged;
  } 

}
