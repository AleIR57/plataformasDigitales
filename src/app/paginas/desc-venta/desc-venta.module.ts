import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescVentaPageRoutingModule } from './desc-venta-routing.module';

import { DescVentaPage } from './desc-venta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescVentaPageRoutingModule
  ],
  declarations: [DescVentaPage]
})
export class DescVentaPageModule {}
