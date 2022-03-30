import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCuentasPorProductoPageRoutingModule } from './listar-cuentas-por-producto-routing.module';

import { ListarCuentasPorProductoPage } from './listar-cuentas-por-producto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCuentasPorProductoPageRoutingModule
  ],
  declarations: [ListarCuentasPorProductoPage]
})
export class ListarCuentasPorProductoPageModule {}
