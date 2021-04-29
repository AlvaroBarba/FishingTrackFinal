import { Component, Input, OnInit } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation/ngx';
import { geoJSON, Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  created = false;
  miMapa:Map;
  @Input() line: any
  title:string;

  constructor() { }

  ngOnInit() {
    this.createMap();
  }

  public createMap() {
    console.log("la linea -> " + this.line);
    this.created = true;
    this.miMapa = new Map("miMapa").setView(this.line.coordinates.getCenter(), 20);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
      .addTo(this.miMapa);
    setTimeout(() => {
      this.miMapa.invalidateSize();
    }, 400);
    geoJSON(this.line).addTo(this.miMapa);
  }

}
