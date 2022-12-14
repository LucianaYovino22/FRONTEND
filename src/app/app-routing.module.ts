import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewskillComponent } from './components/hys/newskill.component';
import { EditskillComponent } from './components/hys/editskill.component';

import { EdditacercademiComponent } from './components/acerca-de/edditacercademi.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newproy', component: NewproyectoComponent},
  { path: 'editproy/:id', component: EditproyectoComponent},
  { path: 'nuevaskill', component: NewskillComponent},
  { path: 'editskill/:id', component: EditskillComponent},
  { path: 'edituser/:id', component: EdditacercademiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }