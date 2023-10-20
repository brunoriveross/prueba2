import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneraqrPage } from './generaqr.page';

const routes: Routes = [
  {
    path: '',
    component: GeneraqrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneraqrPageRoutingModule {}
