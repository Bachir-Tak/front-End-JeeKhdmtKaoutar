import {Component, Input, OnInit} from '@angular/core';
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {Commande} from "../../../controller/model/commande/commande";
import {Produit} from "../../../controller/model/produit/produit";
import {CommandeProduit} from "../../../controller/model/commandeProduit/commande-produit";
import {PaiementService} from "../../../controller/service/paiement/paiement.service";
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit{
  @Input()
  produit !:Produit;




  constructor(private commandeService: CommandeService,private paiementService:PaiementService,private appComponent:AppComponent, private router:Router) {
  }

  public addToCart(produit:Produit){
    this.commandeProduit.produit=produit;
    this.commandeProduit.prixUnitaire=produit.prixVente;
    this.commandeService.addCommandeProduit();
    this.commandeProduit = new CommandeProduit();
    // @ts-ignore
    this.commande.client=this.appComponent.connected[1]["client"];
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.router.navigate(['livraison', this.commande.client])

  }
  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }

  get commandeProduit(): CommandeProduit {
    return this.commandeService.commandeProduit;
  }

  set commandeProduit(value: CommandeProduit) {
    this.commandeService.commandeProduit = value;
  }
}
