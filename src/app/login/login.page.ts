import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import {GlobalConstants} from '../common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  jsonobj: any;

    constructor(
      private fb: FormBuilder,
      private http: HTTP,
      private router: Router,
      public alertController: AlertController,
      private loadingController: LoadingController,
      public toastController: ToastController
  ) {}

  ngOnInit() {
      this.credentials = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  async presentToast(message: string = 'Alert in process.', duration: number = 1200 ) {
    const toast = await this.toastController.create({
        message,
        duration
    });
    toast.present();
  }

  async presentAlert(header: string, subt: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header + '',
      subHeader: subt + '',
      message: message + '',
      buttons: ['OK']
    });

    await alert.present();
  }

  login() {
      // this.presentAlert('Credentials',   'Email/Password', this.credentials.value.email + '/' + this.credentials.value.password);

      this.http.get(GlobalConstants.dbURL + 'login/' + this.credentials.value.email, {}, {})
          .then(data => {
              this.jsonobj = JSON.parse(data.data);
              /*console.log(data.status);
              console.log(data.data); // data received by server
              console.log(data.headers);*/
              if (this.credentials.value.password === this.jsonobj.contraseña) {
                  this.presentToast('Success', 1000);
                  if ( this.jsonobj.type === 'patient') {
                    GlobalConstants.patientProfile.uid = this.jsonobj.uid;
                    this.router.navigateByUrl('/home-patient', { replaceUrl: true });
                  } else {
                    GlobalConstants.doctorProfile.uid = this.jsonobj.uid;
                    this.router.navigateByUrl('/home-doctor', { replaceUrl: true });
                  }
              } else {
                  this.presentToast('El usuario o contraseña es incorrecto.', 2000);
              }
          })
          .catch(error => {
              this.presentAlert('HTTP Request', error.status + '', error.error + '');
          });
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

}
