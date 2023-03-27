import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemandeCreateComponent } from './view/demande/demande-create/demande-create.component';
import { DemandeListComponent } from './view/demande/demande-list/demande-list.component';
import {HttpClientModule} from "@angular/common/http";
import { ClientCreateComponent } from './view/clients/client-create/client-create.component';
import { ClientListComponent } from './view/clients/client-list/client-list.component';
import { CompteCreateComponent } from './view/comptes/compte-create/compte-create.component';
import { CompteListComponent } from './view/comptes/compte-list/compte-list.component';
import { VilleCreateComponent } from './view/villes/ville-create/ville-create.component';
import { VilleListComponent } from './view/villes/ville-list/ville-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DemandeCreateComponent,
    DemandeListComponent,
    ClientCreateComponent,
    ClientListComponent,
    CompteCreateComponent,
    CompteListComponent,
    VilleCreateComponent,
    VilleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
