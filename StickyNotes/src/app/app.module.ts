//componentes de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }from '@angular/forms';
import{ HttpClientModule }from '@angular/common/http';
import {RouterModule,Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';

//material
import { MaterialModule } from "./ExtraModules/material.module";

//componentes propios
import { AppComponent } from './app.component';
import { FirstTryCComponent } from './Componets/first-try-c/first-try-c.component';
import { SecondTryCComponent } from './Componets/second-try-c/second-try-c.component';
import { GaleryComponent } from './Componets/galery/galery.component';

//servicios
//import{DataService} from './Services/DataS/data.service';

const routes: Route[]=[
  {path:'', component:AppComponent},
  {path:'first',component:FirstTryCComponent},
  {path:'second',component:SecondTryCComponent},
  {path:'galery', component:GaleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstTryCComponent,
    SecondTryCComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
