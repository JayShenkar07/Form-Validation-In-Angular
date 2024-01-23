import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { FormsModule } from '@angular/forms';

import {FormBuilder,Validators} from '@angular/forms'

import { ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule,
    BrowserAnimationsModule,
    TypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    BsDropdownModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    provideClientHydration(),
    FormBuilder,
    Validators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 




}
