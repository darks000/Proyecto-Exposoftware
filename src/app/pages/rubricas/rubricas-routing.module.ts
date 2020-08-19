import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubricasPage } from './rubricas.page';

const routes: Routes = [
  {
    path: '',
    component: RubricasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubricasPageRoutingModule {}
