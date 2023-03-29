import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ClientCreateComponent} from './view/clients/client-create/client-create.component';
import {ClientListComponent} from './view/clients/client-list/client-list.component';
import {CompteCreateComponent} from './view/comptes/compte-create/compte-create.component';
import {CompteListComponent} from './view/comptes/compte-list/compte-list.component';
import {VilleCreateComponent} from './view/villes/ville-create/ville-create.component';
import {VilleListComponent} from './view/villes/ville-list/ville-list.component';
import {AchatCreateComponent} from './view/achats/achat-create/achat-create.component';
import {AchatListComponent} from './view/achats/achat-list/achat-list.component';
import {
  AchatCommandeCreateComponent
} from './view/achatCommandes/achat-commande-create/achat-commande-create.component';
import {AchatCommandeListComponent} from './view/achatCommandes/achat-commande-list/achat-commande-list.component';
import {
  HistoriqueAchatCreateComponent
} from './view/historiqueAchats/historique-achat-create/historique-achat-create.component';
import {
  HistoriqueAchatListComponent
} from './view/historiqueAchats/historique-achat-list/historique-achat-list.component';
import {CommandeCreateComponent} from './view/commandes/commande-create/commande-create.component';
import {CommandeListComponent} from './view/commandes/commande-list/commande-list.component';
import {
  CommandeProduitCreateComponent
} from './view/commandeProduits/commande-produit-create/commande-produit-create.component';
import {
  CommandeProduitListComponent
} from './view/commandeProduits/commande-produit-list/commande-produit-list.component';
import {
  RecapulatifAchatCreateComponent
} from './view/recapulatifAchats/recapulatif-achat-create/recapulatif-achat-create.component';
import {
  RecapulatifAchatListComponent
} from './view/recapulatifAchats/recapulatif-achat-list/recapulatif-achat-list.component';
import {FormsModule} from "@angular/forms";
import {
  LivraisonCommandeCreateComponent
} from "./view/livraisonCommande/livraison-commande-create/livraison-commande-create.component";
import {
  LivraisonCommandeListComponent
} from "./view/livraisonCommande/livraison-commande-list/livraison-commande-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientListComponent,
    CompteCreateComponent,
    CompteListComponent,
    VilleCreateComponent,
    VilleListComponent,
    AchatCreateComponent,
    AchatListComponent,
    AchatCommandeCreateComponent,
    AchatCommandeListComponent,
    HistoriqueAchatCreateComponent,
    HistoriqueAchatListComponent,
    CommandeCreateComponent,
    CommandeListComponent,
    CommandeProduitCreateComponent,
    CommandeProduitListComponent,
    RecapulatifAchatCreateComponent,
    RecapulatifAchatListComponent,
    LivraisonCommandeCreateComponent,
    LivraisonCommandeListComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
