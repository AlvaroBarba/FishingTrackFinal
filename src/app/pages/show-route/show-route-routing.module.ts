import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRoutePage } from './show-route.page';

const routes: Routes = [
  {
    path: '',
    component: ShowRoutePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutePageRoutingModule {}
