import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescVentaPage } from './desc-venta.page';

const routes: Routes = [
  {
    path: '',
    component: DescVentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescVentaPageRoutingModule {}
