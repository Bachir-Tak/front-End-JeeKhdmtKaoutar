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
import {ListeELCreateComponent} from "./view/listeEl/liste-el-create/liste-el-create.component";
import {ReceptionCreateComponent} from "./view/reception/reception-create/reception-create.component";
import {ReceptionListComponent} from "./view/reception/reception-list/reception-list.component";
import {LivraisonListComponent} from "./view/livraison/livraison-list/livraison-list.component";
import {ProduitCreateComponent} from "./view/produit/produit-create/produit-create.component";
import {FournisseurCreateComponent} from "./view/fournisseur/fournisseur-create/fournisseur-create.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";
import {
  HistoriqueAchatListComponent
} from "./view/historiqueAchats/historique-achat-list/historique-achat-list.component";


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
    path: 'reception-ch',
    component: ListeELCreateComponent,
    data:{text:'reception',link:'reception'}
  },
  {
    path: 'reception-ch/reception',
    component: ReceptionCreateComponent
  },
  {
    path: 'reception-ch/reception-list',
    component: ReceptionListComponent
  },
  {
    path: 'produit-ch',
    component: ListeELCreateComponent,
    data:{text:'produit',link:'produit'}
  },
  {
    path: 'produit-ch/produit',
    component: ProduitCreateComponent
  },
  {
    path: 'produit-ch/produit-list',
    component: ProduitListComponent
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
    path: 'fournisseur-ch',
    component: ListeELCreateComponent,
    data:{text:'fournisseur',link:'fournisseur'}
  },
  {
    path: 'fournisseur-ch/fournisseur',
    component: FournisseurCreateComponent
  },
  {
    path: 'fournisseur-ch/fournisseur-list',
    component: FournisseurListComponent
  },
  {
    path: 'categorie-ch',
    component: ListeELCreateComponent,
    data:{text:'categorie',link:'categorie'}
  },
  {
    path: 'categorie-ch/categorie',
    component: CategorieProduitCreateComponent
  },
  {
    path: 'categorie-ch/categorie-list',
    component: CategorieProduitListComponent
  },
  {
    path: 'magasin-ch',
    component: ListeELCreateComponent,
    data:{text:'magasin',link:'magasin'}
  },
  {
    path: 'magasin-ch/magasin',
    component: MagasinCreateComponent
  },
  {
    path: 'magasin-ch/magasin-list',
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
    path: 'livraison',
    component: LivraisonListComponent
  },
  {
    path: 'remboursement',
    component: RecuRemboursementCreateComponent
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
