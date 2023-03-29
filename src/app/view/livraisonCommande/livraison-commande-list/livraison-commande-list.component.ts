import {Component, OnInit} from '@angular/core';
import {LivraisonCommandeService} from "../../../controller/service/livraisonCommande/livraison-commande.service";
import {LivraisonCommande} from "../../../controller/model/livraisonCommande/livraison-commande.model";

@Component({
  selector: 'app-livraison-commande-list',
  templateUrl: './livraison-commande-list.component.html',
  styleUrls: ['./livraison-commande-list.component.css']
})
export class LivraisonCommandeListComponent implements OnInit{
  constructor(private livraisonCommandeService: LivraisonCommandeService) {

  }
  ngOnInit(): void {
    this.findAll();
  }


  public findAll():void{
    this.livraisonCommandeService.findAll().subscribe(data=>this.livraisonscommandes = data);
  }

  get livraisoncommade(): LivraisonCommande {
    return this.livraisonCommandeService.livraisoncommande;
  }

  set livraisoncommade(value: LivraisonCommande) {
    this.livraisonCommandeService.livraisoncommande = value;
  }

  get livraisonscommandes(): Array<LivraisonCommande> {
    return this.livraisonCommandeService.livraisonscommandes;
  }

  set livraisonscommandes(value: Array<LivraisonCommande>) {
    this.livraisonCommandeService.livraisonscommandes = value;
  }



}
