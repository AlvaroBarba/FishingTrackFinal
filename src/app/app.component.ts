import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TemasService } from './services/temas.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [InAppBrowser, AppAvailability]
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private theme:TemasService,
    private inAppBrowser: InAppBrowser,
    private appAvailability: AppAvailability,
    private router: Router
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

  //SOCIAL MEDIA

  public goInfoPage(){
    this.router.navigate(["/pages/info/info.page.html"]);
  }

  socialMedia(type) {
    switch (type) {
      case 'FACEBOOK': {
        this.openFacebook('Andrea Díaz Torres', 'https://m.facebook.com/andrea.diaztorres');
        break;
      }
      case 'INSTAGRAM': {
        this.openInstagram('Shadowsdfg17')
        break;
      }
      case 'TWITTER': {
        this.openTwitter('Shadowsdfg17');
        break;
      }
    }
  }
  openTwitter(name) {
    let app;
    if (this.platform.is('ios')) {
      app = 'twitter://';
    } else if (this.platform.is('android')) {
      app = 'com.twitter.android';
    } else {
      this.openInApp('https://twitter.com/' + name);
      return;
    }
    this.appAvailability.check(app)
      .then((res) => {
        const data = 'twitter://user?screen_name=' + name;
        this.openInApp(data);
      }
      ).catch(err => {
        this.openInApp('https://twitter.com/' + name);
});
  }
  openFacebook(name, url) {
    let app;
    if (this.platform.is('ios')) {
      app = 'fb://';
    } else if (this.platform.is('android')) {
      app = 'com.facebook.katana';
    } else {
      this.openInApp('https://www.facebook.com/' + name);
      return;
    }
    this.appAvailability.check(app)
      .then(res => {
        const fbUrl = 'fb://facewebmodal/f?href=' + url;
        this.openInApp(fbUrl);
      }
      ).catch(() => {
        this.openInApp('https://www.facebook.com/' + name);
      });
  }
  openInApp(url) {
    this.inAppBrowser.create(url, '_system')
  }
  openInstagram(name) {
    let app;
    if (this.platform.is('ios')) {
      app = 'instagram://';
    } else if (this.platform.is('android')) {
      app = 'com.instagram.android';
    } else {
      this.openInApp('https://www.instagram.com/' + name);
      return;
    }
    this.appAvailability.check(app)
      .then((res) => {
        this.openInApp('instagram://user?username=' + name);
      }
      ).catch(err => {
        this.openInApp('https://www.instagram.com/' + name);
      });
  }

}
