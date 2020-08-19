import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubricaDetailPage } from './rubrica-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RubricaDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubricaDetailPageRoutingModule {}
