import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {HTTP} from '@ionic-native/http/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.page.html',
  styleUrls: ['./home-patient.page.scss'],
})
export class HomePatientPage implements OnInit {
  datos = GlobalConstants.patientProfile;

  constructor(
      private http: HTTP,
      public toastController: ToastController
  ) { }

  ngOnInit() {
    this.http.get(GlobalConstants.dbURL + 'pacientes/' + GlobalConstants.patientProfile.uid, {}, {})
        .then(datos => {
          GlobalConstants.patientProfile.nombre = datos.data.nombre;
          GlobalConstants.patientProfile.nss = datos.data.nss;
          GlobalConstants.patientProfile.poliza = datos.data.poliza;
        })
        .catch(error => {
          this.presentToast('HTTP Request ' + error.status + ' ' + error.error + '');
        });
  }

  async presentToast(message: string = 'Alert in process.', duration: number = 1200 ) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
  }

}
