import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private navctrl: NavController) { }

  ngOnInit() {
  }

  public goBack() {
    this.navctrl.back();
  }



}
