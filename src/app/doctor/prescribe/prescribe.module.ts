import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrescribePageRoutingModule } from './prescribe-routing.module';

import { PrescribePage } from './prescribe.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrescribePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [PrescribePage]
})
export class PrescribePageModule {}
