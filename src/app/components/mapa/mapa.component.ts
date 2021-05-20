import { Component, Input, OnInit } from '@angular/core'
import { Draggable, GeoJSON,geoJSON, icon, LatLng, Map, Marker, marker, Point, tileLayer } from 'leaflet';

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
  center: any;  

  constructor() { }

  ngOnInit() {
    this.createMap();
  }

  public createMap() {
    this.created = true;
    this.miMapa = new Map(this.route);
    this.miMapa.dragging.disable();
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.miMapa);


 //let coordenadas1:LatLng = JSON.parse(this.line).coordinates[0]; obtener 1 punto de la ruta

  this.miMapa.setView([40,-3], 10);

    setTimeout(() => {
      this.miMapa.invalidateSize();
    }, 400);
    let myroute:GeoJSON=new GeoJSON(JSON.parse(this.line));
    myroute.addTo(this.miMapa);
    this.miMapa.fitBounds(myroute.getBounds());

    this.miMapa.on("load",()=>{
    let myroute:GeoJSON=new GeoJSON();
    myroute.addTo(this.miMapa);
    myroute.addData({
      type:"FeatureCollection",
      features: [this.line]
    }as any);
    });
    this.miMapa.setZoom(17);
    myroute.setStyle({
      color: "red",
      opacity: 60
    });

    this.miMapa.on("click", ()=>{
      this.miMapa.dragging.enable();
    })

  }
}
