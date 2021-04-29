import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-menupopover',
  templateUrl: './menupopover.component.html',
  styleUrls: ['./menupopover.component.scss'],
})
export class MenupopoverComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {}

  closePopover(){
    this.popover.dismiss();
  }

}
