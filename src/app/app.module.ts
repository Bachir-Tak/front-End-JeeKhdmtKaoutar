import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular'
import { AppComponent } from './app.component';
import { DemandeCreateComponent } from './view/demande/demande-create/demande-create.component';
import { DemandeListComponent } from './view/demande/demande-list/demande-list.component';
import {HttpClientModule} from "@angular/common/http";
import { LivraisonCreateComponent } from './view/livraison/livraison-create/livraison-create.component';
import { LivraisonListComponent } from './view/livraison/livraison-list/livraison-list.component';
import { AvoirLivraisonCreateComponent } from './view/avoirLivraison/avoir-livraison-create/avoir-livraison-create.component';
import { AvoirLivraisonListComponent } from './view/avoirLivraison/avoir-livraison-list/avoir-livraison-list.component';
import { LivraisonCommandeCreateComponent } from './view/livraisonCommande/livraison-commande-create/livraison-commande-create.component';
import { LivraisonCommandeListComponent } from './view/livraisonCommande/livraison-commande-list/livraison-commande-list.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DemandeCreateComponent,
    DemandeListComponent,
    LivraisonCreateComponent,
    LivraisonListComponent,
    AvoirLivraisonCreateComponent,
    AvoirLivraisonListComponent,
    LivraisonCommandeCreateComponent,
    LivraisonCommandeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
