import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartadoMediosPageRoutingModule } from './apartado-medios-routing.module';

import { ApartadoMediosPage } from './apartado-medios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartadoMediosPageRoutingModule
  ],
  declarations: [ApartadoMediosPage]
})
export class ApartadoMediosPageModule {}
