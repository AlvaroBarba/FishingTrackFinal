import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Map, Polyline, tileLayer } from 'leaflet';
import { BackgroundGeoService } from '../services/background-geo.service';
import { PopoverService } from '../services/popover.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  mapa: Map
  marcador: any
  latlngs: any
  cargaMapa = false
  linea = undefined;
  newLat: any
  newLong: any
  polyline:Polyline;
  change: boolean = true;
  button = "assets/buttons/play.png";

  constructor(private popover: PopoverService,
    private location: BackgroundGeoService,
    private storage: NativeStorage) {
  }

  ngOnInit() {
    if (!this.cargaMapa) {
      this.vistaMapa();
    }
  }

  ionViewWillEnter() {
    if (!this.cargaMapa) {
      this.vistaMapa();
    }
  }

  async showPopover(ev) {
    this.popover.createPopover(ev);
  }

  public async vistaMapa() {
    this.cargaMapa = true;
    this.mapa = this.location.createMap();
  }

  public async refreshRoute() {
    if (this.cargaMapa)
      this.location.line.addTo(this.mapa);
  }


  public startLocation() {
    this.location.startBackgroundGeolocation();

  }

  public stopLocation() {
    this.location.stopBackgroundGeolocation();
  }

  public changeButton(){
    if(this.change){
      this.startLocation();
      this.change = false;
    }else{
      this.change = true;
      this.stopLocation();
    }
  }


}
