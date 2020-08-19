import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRubricaPageRoutingModule } from './agregar-rubrica-routing.module';

import { AgregarRubricaPage } from './agregar-rubrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRubricaPageRoutingModule
  ],
  declarations: [AgregarRubricaPage]
})
export class AgregarRubricaPageModule {}
