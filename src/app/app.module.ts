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
import { PiechartComponent } from './view/accueil/piechart/piechart.component';
import { CourbeComponent } from './view/accueil/courbe/courbe.component';
import { ListComponent } from './view/accueil/list/list.component';
import { AccueilClComponent } from './view/accueil-cl/accueil-cl/accueil-cl.component';
import { AccueilClMainComponent } from './view/accueil-cl-main/accueil-cl-main/accueil-cl-main.component';
import {LivraisonListComponent} from "./view/livraison/livraison-list/livraison-list.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";

import {SearchClientComponent} from "./view/clients/search-client/search-client.component";
import {LivraisonCreateComponent} from "./view/livraison/livraison-create/livraison-create.component";

import { RemboursementListComponent } from './view/remboursement/remboursement-list/remboursement-list.component';

import { AchatCreateComponent } from './view/achats/achat-create/achat-create.component';
import {RecuCreateComponent} from "./view/recu/recu-create/recu-create.component";
import {RecuListComponent} from "./view/recu/recu-list/recu-list.component";
import {
  RecapitulatifAchatCreateComponent
} from "./view/recapitulatifAchat/recapitulatif-achat-create/recapitulatif-achat-create.component";
import {
  RecapitulatifAchatListComponent
} from "./view/recapitulatifAchat/recapitulatif-achat-list/recapitulatif-achat-list.component";
import {PaiementCreateComponent} from "./view/paiement/paiement-create/paiement-create.component";
import {PaiementListComponent} from "./view/paiement/paiement-list/paiement-list.component";
import {
  AchatCommandeCreateComponent
} from "./view/achatCommandes/achat-commande-create/achat-commande-create.component";
import {AchatCommandeListComponent} from "./view/achatCommandes/achat-commande-list/achat-commande-list.component";
import {
  AvoirLivraisonCreateComponent
} from "./view/avoirLivraison/avoir-livraison-create/avoir-livraison-create.component";
import {AvoirLivraisonListComponent} from "./view/avoirLivraison/avoir-livraison-list/avoir-livraison-list.component";
import {
  CommandeProduitCreateComponent
} from "./view/commandeProduits/commande-produit-create/commande-produit-create.component";
import {
  CommandeProduitListComponent
} from "./view/commandeProduits/commande-produit-list/commande-produit-list.component";
import {CommandeListComponent} from "./view/commandes/commande-list/commande-list.component";
import {CompteListComponent} from "./view/comptes/compte-list/compte-list.component";
import {
  FournisseurProduitListComponent
} from "./view/fournisseurProduits/fournisseur-produit-list/fournisseur-produit-list.component";
import {
  FournisseurProduitCreateComponent
} from "./view/fournisseurProduits/fournisseur-produit-create/fournisseur-produit-create.component";
import {
  HistoriqueAchatCreateComponent
} from "./view/historiqueAchats/historique-achat-create/historique-achat-create.component";
import {
  HistoriqueAchatListComponent
} from "./view/historiqueAchats/historique-achat-list/historique-achat-list.component";
import {
  LivraisonCommandeCreateComponent
} from "./view/livraisonCommande/livraison-commande-create/livraison-commande-create.component";
import {
  LivraisonCommandeListComponent
} from "./view/livraisonCommande/livraison-commande-list/livraison-commande-list.component";
import {ProduitAjouterCreateComponent} from "./view/produit/produit-ajouter-create/produit-ajouter-create.component";



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
    LivraisonCreateComponent,
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
   
    CategorieProduitListComponent,
    CategorieProduitCreateComponent,
    RecuCreateComponent,
    SearchClientComponent,
    AchatCreateComponent,
    RecuListComponent,
    RecapitulatifAchatCreateComponent,
    RecapitulatifAchatListComponent,
    PaiementCreateComponent,
    PaiementListComponent,
    AchatCommandeCreateComponent,
    AchatCommandeListComponent,
    AvoirLivraisonCreateComponent,
    AvoirLivraisonListComponent,
    CommandeProduitCreateComponent,
    CommandeProduitListComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    CompteCreateComponent,
    CompteListComponent,
    FournisseurProduitListComponent,
    FournisseurProduitCreateComponent,
    HistoriqueAchatCreateComponent,
    HistoriqueAchatListComponent,

    RecuRemboursementCreateComponent,
    CategorieProduitCreateComponent,
    LivraisonCreateComponent,
    RemboursementListComponent

    LivraisonCommandeCreateComponent,
    LivraisonCommandeListComponent,
    ProduitAjouterCreateComponent






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
