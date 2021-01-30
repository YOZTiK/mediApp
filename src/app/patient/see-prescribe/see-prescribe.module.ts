import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeePrescribePageRoutingModule } from './see-prescribe-routing.module';

import { SeePrescribePage } from './see-prescribe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeePrescribePageRoutingModule
  ],
  declarations: [SeePrescribePage]
})
export class SeePrescribePageModule {}
