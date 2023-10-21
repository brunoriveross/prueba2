import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneraqrPageRoutingModule } from './generaqr-routing.module';

import { GeneraqrPage } from './generaqr.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneraqrPageRoutingModule,
    QRCodeModule
  ],
  declarations: [GeneraqrPage]
})
export class GeneraqrPageModule {}
