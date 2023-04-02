import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilCreateComponent} from "./view/accueil/accueil-create/accueil-create.component";
import {MagasinCreateComponent} from "./view/magasin/magasin-create/magasin-create.component";
import { RouterTestingModule } from "@angular/router/testing";
import {DemandeCreateComponent} from "./view/demande/demande-create/demande-create.component";
import {ListeCreateComponent} from "./view/liste/liste-create/liste-create.component";
import {CompteCreateComponent} from "./view/comptes/compte-create/compte-create.component";
import {ClientCreateComponent} from "./view/clients/client-create/client-create.component";


const appRouteList: Routes = [
  {
    path: 'accueil',
    component: ClientCreateComponent
  },
  {
    path: 'demande/:clientId/:produitRef',
    component: DemandeCreateComponent
  },
  {
    path: 'liste',
    component: ListeCreateComponent
  },
  {
    path: '**',
    redirectTo: 'accueil'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRouteList),
    RouterTestingModule,

  ]
})
export class AppRoutingModule { }
