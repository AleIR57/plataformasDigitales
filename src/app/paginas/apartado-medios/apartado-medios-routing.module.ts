import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartadoMediosPage } from './apartado-medios.page';

const routes: Routes = [
  {
    path: '',
    component: ApartadoMediosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartadoMediosPageRoutingModule {}
