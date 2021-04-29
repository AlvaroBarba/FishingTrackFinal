import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenupopoverComponent } from '../components/menupopover/menupopover.component';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {

  constructor(private popover : PopoverController) { }

  async createPopover(ev?){
    const pop = await this.popover.create({
      component: MenupopoverComponent,
      event: ev
    })
    return await pop.present();
  }


}
