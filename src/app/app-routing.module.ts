import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccueilCreateComponent} from "./view/accueil/accueil-create/accueil-create.component";
import {MagasinCreateComponent} from "./view/magasin/magasin-create/magasin-create.component";
import { RouterTestingModule } from "@angular/router/testing";
import {DemandeCreateComponent} from "./view/demande/demande-create/demande-create.component";
import {ListeCreateComponent} from "./view/liste/liste-create/liste-create.component";
import {CompteCreateComponent} from "./view/comptes/compte-create/compte-create.component";
import {ClientCreateComponent} from "./view/clients/client-create/client-create.component";
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {AchatCreateComponent} from "./view/achats/achat-create/achat-create.component";
import {
  CategorieProduitListComponent
} from "./view/categorieProduit/categorie-produit-list/categorie-produit-list.component";
import {ProduitListComponent} from "./view/produit/produit-list/produit-list.component";
import {FournisseurListComponent} from "./view/fournisseur/fournisseur-list/fournisseur-list.component";
import {RemboursementCreateComponent} from "./view/remboursement/remboursement-create/remboursement-create.component";
import {RecuCreateComponent} from "./view/recu/recu-create/recu-create.component";
import {
  RecuRemboursementCreateComponent
} from "./view/recuRemboursement/recu-remboursement-create/recu-remboursement-create.component";
import {ClientListComponent} from "./view/clients/client-list/client-list.component";
import {MagasinListComponent} from "./view/magasin/magasin-list/magasin-list.component";
import {StockListComponent} from "./view/stock/stock-list/stock-list.component";
import {AchatListComponent} from "./view/achats/achat-list/achat-list.component";


const appRouteList: Routes = [
  {
    path: 'accueil',
    component: AccueilCreateComponent
  },
  {
    path: 'demande/:clientId/:produitRef',
    component: DemandeCreateComponent
  },
  {
    path: 'liste',
    component: ListeCreateComponent,
  },
  {
    path: 'clients',
    component: ClientListComponent
  },
  {
    path: 'fournisseurs',
    component: FournisseurListComponent
  },
  {
    path: 'categories',
    component: CategorieProduitListComponent
  },
  {
    path: 'magasins',
    component: MagasinListComponent
  },
  {
    path: 'stocks',
    component: StockListComponent
  },
  {
    path: 'achats',
    component: AchatListComponent
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
