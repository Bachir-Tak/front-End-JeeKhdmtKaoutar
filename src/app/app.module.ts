import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemandeCreateComponent } from './view/demande/demande-create/demande-create.component';
import { DemandeListComponent } from './view/demande/demande-list/demande-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MagasinCreateComponent } from './view/magasin/magasin-create/magasin-create.component';
import { MagasinListComponent } from './view/magasin/magasin-list/magasin-list.component';
import {FormsModule} from "@angular/forms";
import { AccueilCreateComponent } from './view/accueil/accueil-create/accueil-create.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SanitizeHtmlPipe} from "./SanitizeHtmlPipe";
import { ReceptionCreateComponent } from './view/reception/reception-create/reception-create.component';
import { ReceptionListComponent } from './view/reception/reception-list/reception-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DemandeCreateComponent,
    DemandeListComponent,
    MagasinCreateComponent,
    MagasinListComponent,
    AccueilCreateComponent,
    SanitizeHtmlPipe,
    ReceptionCreateComponent,
    ReceptionListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
