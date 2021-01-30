import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeeProfilePageRoutingModule } from './see-profile-routing.module';

import { SeeProfilePage } from './see-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeeProfilePageRoutingModule
  ],
  declarations: [SeeProfilePage]
})
export class SeeProfilePageModule {}
