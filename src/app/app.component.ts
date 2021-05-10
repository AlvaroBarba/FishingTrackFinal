import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TemasService } from './services/temas.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme:TemasService
  ) {
    this.initializeApp();
  }

   //ACTIVAR TEMAS

   activateDarkMode(){
    this.theme.enableDarkMode();
  }

  activateDefaultMode(){
    this.theme.enableDefaultMode();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackTranslucent();
      this.splashScreen.hide();
      this.theme.modeSelected();
    });
  }


}
