import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.page.html',
  styleUrls: ['./show-route.page.scss'],
})
export class ShowRoutePage implements OnInit {

  @Input() route;
  level:string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    switch(this.route.waterLevel){
      case 1:
        this.level = "Óptimo"
        break;
      case 2:
        this.level = "Medio"
        break;
      case 3:
        this.level = "Bajo"
        break;
      default:
        this.level = "Sin datos..."
        break;

    }
  }

  public goBack() {
    this.modalController.dismiss();
  }

}
