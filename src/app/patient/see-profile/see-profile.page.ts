import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.page.html',
  styleUrls: ['./see-profile.page.scss'],
})
export class SeeProfilePage implements OnInit {
  datos = GlobalConstants.patientProfile;
  constructor() { }

  ngOnInit() {
  }

}
