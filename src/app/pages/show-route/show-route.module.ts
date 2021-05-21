import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRoutePageRoutingModule } from './show-route-routing.module';

import { ShowRoutePage } from './show-route.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRoutePageRoutingModule
  ],
  declarations: [ShowRoutePage]
})
export class ShowRoutePageModule {}
