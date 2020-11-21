import { Component, OnInit } from '@angular/core';
import {Validators} from '@angular/forms';
import {GlobalConstants} from '../../common/global-constants';
import {HTTP} from '@ionic-native/http/ngx';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-prescribe',
  templateUrl: './prescribe.page.html',
  styleUrls: ['./prescribe.page.scss'],
})
export class PrescribePage implements OnInit {
  todo = {
    fecha: undefined,
    padecimiento: undefined,
    diagnostico: undefined,
    mnombre: undefined,
    mhora: undefined,
    mdosis: undefined,
    mperiodo: undefined,
    nsspaciente: undefined,
    cdoctor: undefined,
    npaciente: undefined,
    edad: undefined,
    sexo: undefined,
    alergias: undefined,
    talla: undefined,
    peso: undefined,
    imc: undefined,
    temperatura: undefined,
    presion: undefined
  };
  jsonobj: any;

  constructor(
      private http: HTTP,
      public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async presentToast(message: string = 'Alert in process.', duration: number = 1200 ) {
    const toast = await this.toastController.create({
      message,
      duration
    });
    toast.present();
  }

  openDatePicker() {
    console.log('');
  }

  registrarReceta() {
    console.log(this.todo);

    const regreceta = {
      "fecha": this.todo.fecha,
        "padecimiento": this.todo.padecimiento,
        "diagnostico": this.todo.diagnostico,
        "medicamento": [
          {
            "nombre": this.todo.mnombre,
            "hora": this.todo.mhora,
            "dosis": this.todo.mdosis,
            "periodo": this.todo.mperiodo
          }
        ],
        "nss_paciente": this.todo.nsspaciente,
        "cedula_doctor": this.todo.cdoctor,
        "Nombre completo": this.todo.npaciente,
        "Edad": this.todo.edad,
        "Sexo": this.todo.sexo,
        "Alergias": this.todo.alergias,
        "talla": this.todo.talla,
        "peso": this.todo.peso,
        "IMC": this.todo.imc,
        "temperatura": this.todo.temperatura,
        "presion arterial": this.todo.presion
    };
    this.http.setDataSerializer('json');
    this.http.post(GlobalConstants.dbURL + 'recetas/', regreceta, { 'Content-Type': 'application/json' })
        .then(data => {
          this.jsonobj = JSON.parse(data.data);
          this.presentToast('Receta Registrada => uid ' + this.jsonobj.id);
        })
        .catch(error => {
          this.presentToast('HTTP Request Error: ' + error.error);
        });
  }
}
