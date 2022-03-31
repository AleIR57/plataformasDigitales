import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescCuentaPage } from './desc-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: DescCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescCuentaPageRoutingModule {}
