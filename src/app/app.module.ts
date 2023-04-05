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
import {CompteCreateComponent} from "./view/comptes/compte-create/compte-create.component";
import {ClientCreateComponent} from "./view/clients/client-create/client-create.component";
import {RemboursementCreateComponent} from "./view/remboursement/remboursement-create/remboursement-create.component";

import {
  RecuRemboursementCreateComponent
} from "./view/recuRemboursement/recu-remboursement-create/recu-remboursement-create.component";
import {ListeCreateComponent} from "./view/liste/liste-create/liste-create.component";
import { StockCreateComponent } from './view/stock/stock-create/stock-create.component';
import { StockListComponent } from './view/stock/stock-list/stock-list.component';
import {ClientListComponent} from "./view/clients/client-list/client-list.component";
import {FournisseurListComponent} from "./view/fournisseur/fournisseur-list/fournisseur-list.component";
import {
  CategorieProduitListComponent
} from "./view/categorieProduit/categorie-produit-list/categorie-produit-list.component";
import {AchatListComponent} from "./view/achats/achat-list/achat-list.component";
import { ListeELCreateComponent } from './view/listeEl/liste-el-create/liste-el-create.component';
import {ProduitCreateComponent} from "./view/produit/produit-create/produit-create.component";
import {ProduitListComponent} from "./view/produit/produit-list/produit-list.component";
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {FournisseurCreateComponent} from "./view/fournisseur/fournisseur-create/fournisseur-create.component";
import { PiechartComponent } from './view/accueil/piechart/piechart.component';
import { CourbeComponent } from './view/accueil/courbe/courbe.component';

import { AccueilClComponent } from './view/accueil-cl/accueil-cl/accueil-cl.component';
import { AccueilClMainComponent } from './view/accueil-cl-main/accueil-cl-main/accueil-cl-main.component';
import {LivraisonListComponent} from "./view/livraison/livraison-list/livraison-list.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";
import {LivraisonCreateComponent} from "./view/livraison/livraison-create/livraison-create.component";
import {ListComponent} from "./view/accueil/list/list.component";
import { SearchClientComponent } from './view/clients/search-client/search-client.component';



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
    CompteCreateComponent,
    ClientCreateComponent,
    RemboursementCreateComponent,
    RecuRemboursementCreateComponent,
    ListeCreateComponent,
    StockCreateComponent,
    StockListComponent,
    ClientListComponent,
    FournisseurListComponent,
    MagasinListComponent,
    CategorieProduitListComponent,
    AchatListComponent,
    ListeELCreateComponent,
    ProduitCreateComponent,
    ProduitListComponent,
    CommandeCreateComponent,
    FournisseurCreateComponent,
    PiechartComponent,
    CourbeComponent,
    ListComponent,
    AccueilClComponent,
    AccueilClMainComponent,
    LivraisonListComponent,
    ListeCreateComponent,
    CategorieProduitCreateComponent,
    LivraisonCreateComponent,
    SearchClientComponent,
    SearchClientComponent



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
