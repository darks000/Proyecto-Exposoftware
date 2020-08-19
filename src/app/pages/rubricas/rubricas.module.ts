import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubricasPageRoutingModule } from './rubricas-routing.module';

import { RubricasPage } from './rubricas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubricasPageRoutingModule
  ],
  declarations: [RubricasPage]
})
export class RubricasPageModule {}
