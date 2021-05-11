import { Component, Input, OnInit } from '@angular/core'
import { GeoJSON,geoJSON, Map, tileLayer } from 'leaflet';

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
    this.created = true;
    this.miMapa = new Map("miMapa");
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.miMapa);
    setTimeout(() => {
      this.miMapa.invalidateSize();
    }, 400);
    this.miMapa.on("load",()=>{
      console.log("CARGADO");
      let myroute:GeoJSON=new GeoJSON();
    myroute.addTo(this.miMapa);
    myroute.addData({
      type:"FeatureCollection",
      features: [this.line]
    }as any);
    });
  
  }
}
