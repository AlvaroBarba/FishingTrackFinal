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
  @Input() route;
  id:string = "";
  

  constructor() { }

  ngOnInit() {
    this.createMap();
  }

  public createMap() {
    this.created = true;
    console.log("ID MAPA -> " + this.route);
    this.miMapa = new Map(this.route);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.miMapa);

  this.miMapa.setView([40,-3],5)

    setTimeout(() => {
      this.miMapa.invalidateSize();
    }, 400);
    console.log(this.line)
    let myroute:GeoJSON=new GeoJSON(JSON.parse(this.line));
    
    myroute.addTo(this.miMapa);
    this.miMapa.fitBounds(myroute.getBounds())

    this.miMapa.on("load",()=>{
      let myroute:GeoJSON=new GeoJSON();
    myroute.addTo(this.miMapa);
    myroute.addData({
      type:"FeatureCollection",
      features: [this.line]
    }as any);
    });
  
  }
}
