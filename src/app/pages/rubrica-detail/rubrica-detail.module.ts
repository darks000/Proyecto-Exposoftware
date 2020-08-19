import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubricaDetailPageRoutingModule } from './rubrica-detail-routing.module';

import { RubricaDetailPage } from './rubrica-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubricaDetailPageRoutingModule
  ],
  declarations: [RubricaDetailPage]
})
export class RubricaDetailPageModule {}
