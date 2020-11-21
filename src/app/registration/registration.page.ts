import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import {GlobalConstants} from '../common/global-constants';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  isDoctor: boolean;
  jsonobj: any;
  doctorRegister: FormGroup;
  patientRegister: FormGroup;

  constructor(
      private fb: FormBuilder,
      private http: HTTP,
      private router: Router,
      public toastController: ToastController
  ) {

  }

  ngOnInit() {
    this.isDoctor = true;

    this.doctorRegister = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      street: ['', [Validators.required]],
      cp: ['', [Validators.required, Validators.minLength(5)]],
      cedprof: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.patientRegister = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      nss: ['', [Validators.required]],
      poliza: ['', [Validators.required]],
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

  changeDoctorValue($event: any) {
    this.isDoctor = !this.isDoctor;
  }

  registrarDoctor() {
    const regDoct = {
      "nombre": String(this.doctorRegister.value.name) + ' ' + String(this.doctorRegister.value.lastname),
      "direccion": [{"calle": String(this.doctorRegister.value.street), "cp": String(this.doctorRegister.value.cp)}],
      "cedula": String(this.doctorRegister.value.cedprof)
    };
    this.http.setDataSerializer('json');
    this.http.post(GlobalConstants.dbURL + 'doctores/', regDoct, { 'Content-Type': 'application/json' })
        .then(data => {
          this.jsonobj = JSON.parse(data.data);
          this.presentToast('HTTP Request Success => uid ' + this.jsonobj.id);
        })
        .catch(error => {
          this.presentToast('HTTP Request Error: ' + error.error);
        });

    const regLogin = {
      "id": String(this.doctorRegister.value.email),
      "contraseña": String(this.doctorRegister.value.password) + '',
      "type": "doctor",
      "uid": String(this.jsonobj.id)
    };
    this.http.setDataSerializer('json');
    this.http.post(GlobalConstants.dbURL + 'login/', regLogin, { 'Content-Type': 'application/json' })
        .then(data => {
          this.jsonobj = JSON.parse(data.data);
          this.presentToast('HTTP Request Success: ' + this.jsonobj, 3000);
        })
        .catch(error => {
          this.presentToast('HTTP Request Error: ' + error.error);
        });

    this.presentToast('this.doctorRegister.value.name: \n' + this.doctorRegister.value.name +
        '\nthis.doctorRegister.value.email:\n' + this.doctorRegister.value.email +
        '\nthis.doctorRegister.value.type:\n' + 'doctor', 3000);

    this.router.navigateByUrl('/home-doctor', { replaceUrl: true });
  }

  registrarPaciente() {
    const regDoct = {
      "nombre": String(this.patientRegister.value.name) + ' ' + String(this.patientRegister.value.lastname),
      "nss": String(this.patientRegister.value.nss),
      "poliza": String(this.patientRegister.value.poliza)
    };

    this.http.setDataSerializer('json');
    this.http.post(GlobalConstants.dbURL + 'pacientes/', regDoct, { 'Content-Type': 'application/json' })
        .then(data => {
          this.jsonobj = JSON.parse(data.data);
          this.presentToast('HTTP Request Success => uid ' + this.jsonobj.id);
        })
        .catch(error => {
          this.presentToast('HTTP Request Error: ' + error.error);
        });

    const regLogin = {
      "id": String(this.doctorRegister.value.email),
      "contraseña": String(this.doctorRegister.value.password) + '',
      "type": "patient",
      "uid": String(this.jsonobj.id)
    };
    this.http.setDataSerializer('json');
    this.http.post(GlobalConstants.dbURL + 'login/', regLogin, { 'Content-Type': 'application/json' })
        .then(data => {
          this.jsonobj = JSON.parse(data.data);
          this.presentToast('HTTP Request Success: ' + this.jsonobj, 3000);
        })
        .catch(error => {
          this.presentToast('HTTP Request Error: ' + error.error);
        });

    this.presentToast('this.doctorRegister.value.name: \n' + this.patientRegister.value.name +
        '\nthis.doctorRegister.value.email:\n' + this.patientRegister.value.email +
        '\nthis.doctorRegister.value.type:\n' + 'doctor', 3000);

    this.router.navigateByUrl('/home-patient', { replaceUrl: true });
  }

  // Easy access for form fields
  get dname() {
    return this.doctorRegister.get('name');
  }

  get dlname() {
    return this.doctorRegister.get('lastname');
  }

  get dstreet() {
    return this.doctorRegister.get('street');
  }

  get dcp() {
    return this.doctorRegister.get('cp');
  }

  get cprof() {
    return this.doctorRegister.get('cedprof');
  }

  get demail() {
    return this.doctorRegister.get('email');
  }

  get dpassword() {
    return this.doctorRegister.get('password');
  }

  get pname() {
    return this.patientRegister.get('name');
  }

  get plname() {
    return this.patientRegister.get('lastname');
  }

  get pnss() {
    return this.patientRegister.get('nss');
  }

  get ppoliza() {
    return this.patientRegister.get('poliza');
  }

  get pemail() {
    return this.patientRegister.get('email');
  }

  get ppassword() {
    return this.patientRegister.get('password');
  }
}
