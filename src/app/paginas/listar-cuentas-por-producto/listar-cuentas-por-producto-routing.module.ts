import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCuentasPorProductoPage } from './listar-cuentas-por-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCuentasPorProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCuentasPorProductoPageRoutingModule {}
