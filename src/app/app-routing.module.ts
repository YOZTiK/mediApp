import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home-patient',
    loadChildren: () => import('./patient/home-patient/home-patient.module').then( m => m.HomePatientPageModule)
  },
  {
    path: 'home-doctor',
    loadChildren: () => import('./doctor/home-doctor/home-doctor.module').then( m => m.HomeDoctorPageModule)
  },
  {
    path: 'prescribe',
    loadChildren: () => import('./doctor/prescribe/prescribe.module').then( m => m.PrescribePageModule)
  },
  {
    path: 'settings-doctor',
    loadChildren: () => import('./doctor/settings-doctor/settings-doctor.module').then( m => m.SettingsDoctorPageModule)
  },
  {
    path: 'settings-patient',
    loadChildren: () => import('./patient/settings-patient/settings-patient.module').then( m => m.SettingsPatientPageModule)
  },
  {
    path: 'see-patient',
    loadChildren: () => import('./doctor/see-patient/see-patient.module').then( m => m.SeePatientPageModule)
  },
  {
    path: 'search-patient',
    loadChildren: () => import('./doctor/search-patient/search-patient.module').then( m => m.SearchPatientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
