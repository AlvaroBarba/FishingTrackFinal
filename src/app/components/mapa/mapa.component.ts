import { Component, Input, OnInit } from '@angular/core'
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
    this.created = true;
    this.miMapa = new Map("miMapa").setView([1.12, 12.12], 20);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })
      .addTo(this.miMapa);
    setTimeout(() => {
      this.miMapa.invalidateSize();
    }, 400);

   /** let myLine = {
      "type": "Feature" as const,
      "properties": {
          "name": "myGeometry",
          "amenity": "Route",
          "popupContent": this.title,
      },
      "geometry": this.line
  };

  geoJSON(myLine).addTo(this.miMapa); **/

  /** let myLine: GeoJSON.Feature = {
    "type": "Feature",
    "properties": {
        "name": "myGeometry",
        "amenity": "Route",
        "popupContent": this.title,
    },
    "geometry": this.line
  };

  geoJSON(myLine).addTo(this.miMapa); **/

  
    
  }

}
