import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from '../../common/global-constants';
import {HTTP} from '@ionic-native/http/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-home-doctor',
  templateUrl: './home-doctor.page.html',
  styleUrls: ['./home-doctor.page.scss'],
})
export class HomeDoctorPage implements OnInit {
  datos = GlobalConstants.doctorProfile;
  constructor(
      private http: HTTP,
      public toastController: ToastController
  ) { }

  ngOnInit() {
    this.http.get(GlobalConstants.dbURL + 'doctores/' + GlobalConstants.doctorProfile.uid, {}, {})
        .then(datos => {
          GlobalConstants.doctorProfile.nombre = datos.data.nombre;
          GlobalConstants.doctorProfile.cedula = datos.data.cedula;
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

    submit() {
        console.log('');
    }
}
