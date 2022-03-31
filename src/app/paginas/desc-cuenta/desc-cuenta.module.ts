import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescCuentaPageRoutingModule } from './desc-cuenta-routing.module';

import { DescCuentaPage } from './desc-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescCuentaPageRoutingModule
  ],
  declarations: [DescCuentaPage]
})
export class DescCuentaPageModule {}
