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
import {VilleListComponent} from "./view/villes/ville-list/ville-list.component";
import {RemboursementCreateComponent} from "./view/remboursement/remboursement-create/remboursement-create.component";
import {RecuRemboursement} from "./controller/model/recuRemboursement/recu-remboursement";
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
import {AchatCreateComponent} from "./view/achats/achat-create/achat-create.component";
import {
  HistoriqueAchatListComponent
} from "./view/historiqueAchats/historique-achat-list/historique-achat-list.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";
import {LivraisonCreateComponent} from "./view/livraison/livraison-create/livraison-create.component";


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
    VilleListComponent,
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
    AchatCreateComponent,
    HistoriqueAchatListComponent,
    RecuRemboursementCreateComponent,
    CategorieProduitCreateComponent,
    LivraisonCreateComponent

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
