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
  }
  ngOnInit(): void {
    // @ts-ignore
    this.commande.client=this.appComponent.connected[1]["client"];
  }
  public save(): void{
    console.log(this.commande)
    this.commandeService.save(this.commande).subscribe(data => {
      if(data != null){
        alert('SAVE SUCCESS');
         this.router.navigate(['/livraison', this.commande.ref])

      }else{
        alert('SAVE ERROR');
      }
    });
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
