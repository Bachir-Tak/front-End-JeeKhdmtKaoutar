import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MagasinCreateComponent} from "./view/magasin/magasin-create/magasin-create.component";
import {RouterTestingModule} from "@angular/router/testing";
import {DemandeCreateComponent} from "./view/demande/demande-create/demande-create.component";
import {ListeCreateComponent} from "./view/liste/liste-create/liste-create.component";
import {
  CategorieProduitListComponent
} from "./view/categorieProduit/categorie-produit-list/categorie-produit-list.component";
import {ProduitListComponent} from "./view/produit/produit-list/produit-list.component";
import {FournisseurListComponent} from "./view/fournisseur/fournisseur-list/fournisseur-list.component";
import {RemboursementCreateComponent} from "./view/remboursement/remboursement-create/remboursement-create.component";
import {ClientListComponent} from "./view/clients/client-list/client-list.component";
import {MagasinListComponent} from "./view/magasin/magasin-list/magasin-list.component";
import {StockListComponent} from "./view/stock/stock-list/stock-list.component";
import {CommandeListComponent} from "./view/commandes/commande-list/commande-list.component";
import {ListeELCreateComponent} from "./view/listeEl/liste-el-create/liste-el-create.component";
import {ReceptionCreateComponent} from "./view/reception/reception-create/reception-create.component";
import {ReceptionListComponent} from "./view/reception/reception-list/reception-list.component";
import {LivraisonListComponent} from "./view/livraison/livraison-list/livraison-list.component";
import {FournisseurCreateComponent} from "./view/fournisseur/fournisseur-create/fournisseur-create.component";
import {
  CategorieProduitCreateComponent
} from "./view/categorieProduit/categorie-produit-create/categorie-produit-create.component";

import {WhichComponent} from "./view/Which/which/which.component";
import {ConnexionService} from "./controller/service/connexion/connexion.service";
import {ProduitAjouterCreateComponent} from "./view/produit/produit-ajouter-create/produit-ajouter-create.component";
import {DemandeListComponent} from "./view/demande/demande-list/demande-list.component";
import {RemboursementListComponent} from "./view/remboursement/remboursement-list/remboursement-list.component";
import {ProduitClientListComponent} from "./view/produit/produit-client-list/produit-client-list.component";
import {ConnexionNotService} from "./controller/service/connexionNot/connexion-not.service";
import {ProposComponent} from "./view/propos/propos.component";
import {ProduitCreateComponent} from "./view/produit/produit-create/produit-create.component";
import {LivraisonCreateComponent} from "./view/livraison/livraison-create/livraison-create.component";
import {PaiementCreateComponent} from "./view/paiement/paiement-create/paiement-create.component";


const appRouteList: Routes = [
  {
    path: 'accueil',
    component: WhichComponent,
  },
  {
    path: 'demandes',
    component: DemandeListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'reception-ch',
    component: ListeELCreateComponent,
    data:{text:'reception',link:'reception'},
    canActivate: [ConnexionService]
  },
  {
    path: 'reception-ch/reception',
    component: ReceptionCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'reception-ch/reception-list',
    component: ReceptionListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'produit-ch',
    component: ListeELCreateComponent,
    data:{text:'produit',link:'produit'},
    canActivate: [ConnexionService]
  },
  {
    path: 'produit-ch/produit',
    component: ProduitAjouterCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'produit-ch/produit-list',
    component: ProduitListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'liste',
    component: ListeCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'fournisseur-ch',
    component: ListeELCreateComponent,
    data:{text:'fournisseur',link:'fournisseur'},
    canActivate: [ConnexionService]
  },
  {
    path: 'fournisseur-ch/fournisseur',
    component: FournisseurCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'fournisseur-ch/fournisseur-list',
    component: FournisseurListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'categorie-ch',
    component: ListeELCreateComponent,
    data:{text:'categorie',link:'categorie'},
    canActivate: [ConnexionService]
  },
  {
    path: 'categorie-ch/categorie',
    component: CategorieProduitCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'categorie-ch/categorie-list',
    component: CategorieProduitListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'magasin-ch',
    component: ListeELCreateComponent,
  canActivate: [ConnexionService],
    data:{text:'magasin',link:'magasin'}
  },
  {
    path: 'magasin-ch/magasin',
    component: MagasinCreateComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'magasin-ch/magasin-list',
    component: MagasinListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'stock',
    component: StockListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'commandes',
    component: CommandeListComponent,
    canActivate: [ConnexionService]
  },

  {
    path: 'remboursement',
    component: RemboursementListComponent,
    canActivate: [ConnexionService]
  },
  {
    path: 'produits',
    component: ProduitClientListComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'produit/:ProduitRef',
    component: ProduitCreateComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'historique',
    component: CommandeListComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'demande/:ClientCin',
    component: DemandeCreateComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'apropos',
    component: ProposComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'livraison/:CommandeRef',
    component: LivraisonCreateComponent,
    canActivate: [ConnexionNotService]
  },
  {
    path: 'paiement/:CommandeRef',
    component: PaiementCreateComponent,
    canActivate: [ConnexionNotService]
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
