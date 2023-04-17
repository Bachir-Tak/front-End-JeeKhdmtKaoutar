import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DemandeCreateComponent} from './view/demande/demande-create/demande-create.component';
import {DemandeListComponent} from './view/demande/demande-list/demande-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MagasinCreateComponent} from './view/magasin/magasin-create/magasin-create.component';
import {MagasinListComponent} from './view/magasin/magasin-list/magasin-list.component';
import {FormsModule} from "@angular/forms";
import {AccueilAdmin} from './view/accueilAdmin/accueilAdmin/accueilAdmin';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {SanitizeHtmlPipe} from "./SanitizeHtmlPipe";
import {ReceptionCreateComponent} from './view/reception/reception-create/reception-create.component';
import {ReceptionListComponent} from './view/reception/reception-list/reception-list.component';
import {CompteCreateComponent} from "./view/comptes/compte-create/compte-create.component";
import {ClientCreateComponent} from "./view/clients/client-create/client-create.component";
import {RemboursementCreateComponent} from "./view/remboursement/remboursement-create/remboursement-create.component";
import {
  RecuRemboursementCreateComponent
} from "./view/recuRemboursement/recu-remboursement-create/recu-remboursement-create.component";
import {ListeCreateComponent} from "./view/liste/liste-create/liste-create.component";
import {StockListComponent} from './view/stock/stock-list/stock-list.component';
import {ClientListComponent} from "./view/clients/client-list/client-list.component";
import {FournisseurListComponent} from "./view/fournisseur/fournisseur-list/fournisseur-list.component";
import {
  CategorieProduitListComponent
} from "./view/categorieProduit/categorie-produit-list/categorie-produit-list.component";
import {CommandeListComponent} from "./view/commandes/commande-list/commande-list.component";
import {ListeELCreateComponent} from './view/listeEl/liste-el-create/liste-el-create.component';
import {ProduitCreateComponent} from "./view/produit/produit-create/produit-create.component";
import {ProduitListComponent} from "./view/produit/produit-list/produit-list.component";
import {CommandeCreateComponent} from "./view/commandes/commande-create/commande-create.component";
import {FournisseurCreateComponent} from "./view/fournisseur/fournisseur-create/fournisseur-create.component";

import {NavbarClient} from './view/navbarClient/navbarClient/navbarClient';
import {AccueilClient} from './view/accueilClient/accueilClient/accueilClient';
import {LivraisonListComponent} from "./view/livraison/livraison-list/livraison-list.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";
import {LivraisonCreateComponent} from "./view/livraison/livraison-create/livraison-create.component";
import {SearchClientComponent} from "./view/clients/search-client/search-client.component";
import {NavbarAdmin} from './view/navbarAdmin/navbarAdmin/navbarAdmin';
import {WhichComponent} from './view/Which/which/which.component';
import {ProduitAjouterCreateComponent} from "./view/produit/produit-ajouter-create/produit-ajouter-create.component";
import {SearchCategorieComponent} from "./view/categorieProduit/search-categorie/search-categorie.component";
import {SearchFournisseurComponent} from "./view/fournisseur/search-fournisseur/search-fournisseur.component";
import {SearchProduitComponent} from "./view/produit/search-produit/search-produit.component";
import {ProduitClientListComponent} from "./view/produit/produit-client-list/produit-client-list.component";
import {RemboursementListComponent} from "./view/remboursement/remboursement-list/remboursement-list.component";

import {PiechartComponent} from "./view/accueil/piechart/piechart.component";
import {CourbeComponent} from "./view/accueil/courbe/courbe.component";
import {ListComponent} from "./view/accueil/list/list.component";
import {PaiementCreateComponent} from "./view/paiement/paiement-create/paiement-create.component";
import {RecuCreateComponent} from "./view/recu/recu-create/recu-create.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    DemandeCreateComponent,
    DemandeListComponent,
    MagasinCreateComponent,
    MagasinListComponent,
    AccueilAdmin,
    SanitizeHtmlPipe,
    ReceptionCreateComponent,
    ReceptionListComponent,
    CompteCreateComponent,
    ClientCreateComponent,
    RemboursementCreateComponent,
    RecuRemboursementCreateComponent,
    ListeCreateComponent,
    StockListComponent,
    ClientListComponent,
    FournisseurListComponent,
    MagasinListComponent,
    CategorieProduitListComponent,
    CommandeListComponent,
    ListeELCreateComponent,
    ProduitCreateComponent,
    ProduitListComponent,
    CommandeCreateComponent,
    FournisseurCreateComponent,
    NavbarClient,
    AccueilClient,
    LivraisonListComponent,
    ListeCreateComponent,
    CategorieProduitListComponent,
    CategorieProduitCreateComponent,
    LivraisonCreateComponent,
    SearchClientComponent,
    RecuRemboursementCreateComponent,
    NavbarAdmin,
    WhichComponent,
    ProduitAjouterCreateComponent,
    SearchClientComponent,
    SearchCategorieComponent,
    SearchCategorieComponent,
    SearchFournisseurComponent,
    SearchProduitComponent,
    ProduitClientListComponent,
    RemboursementListComponent,
    PiechartComponent,
    CourbeComponent,
    ListComponent,
    CommandeCreateComponent,
    PaiementCreateComponent,
    RecuCreateComponent

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterOutlet,
        BrowserModule,
        AppRoutingModule,
        RouterLink,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
