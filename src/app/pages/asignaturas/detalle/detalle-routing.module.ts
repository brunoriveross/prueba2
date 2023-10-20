import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePage } from './detalle.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePage
  },
  {
    path: 'generaqr',
    loadChildren: () => import('./generaqr/generaqr.module').then( m => m.GeneraqrPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePageRoutingModule {}
