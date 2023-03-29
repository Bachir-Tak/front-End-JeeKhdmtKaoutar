import {Component, OnInit} from '@angular/core';
import {LivraisonCommandeService} from "../../../controller/service/livraisonCommande/livraison-commande.service";
import {LivraisonCommande} from "../../../controller/model/livraisonCommande/livraison-commande.model";

@Component({
  selector: 'app-livraison-commande-create',
  templateUrl: './livraison-commande-create.component.html',
  styleUrls: ['./livraison-commande-create.component.css']
})
export class LivraisonCommandeCreateComponent implements OnInit {
  constructor(private livraisonCommandeService: LivraisonCommandeService) {

  }
  public save(): void {
    this.livraisonCommandeService.save().subscribe(data => {
      if (data != null) {
        this.livraisonscommandes.push({...this.livraisoncommande});
        this.livraisonCommandeService.livraisoncommande == null;
        alert('Save Success');
      } else {
        alert('Save Error ::: Ref Exixt');
      }
    });
  }

  ngOnInit(): void {
  }
  get livraisoncommande(): LivraisonCommande {
    return this.livraisonCommandeService.livraisoncommande;
  }

  set livraisoncommande(value: LivraisonCommande) {
    this.livraisonCommandeService.livraisoncommande = value;
  }

  get livraisonscommandes(): Array<LivraisonCommande> {
    return this.livraisonCommandeService.livraisonscommandes;
  }

  set livraisonscommandes(value: Array<LivraisonCommande>) {
    this.livraisonCommandeService.livraisonscommandes = value;
  }

}
