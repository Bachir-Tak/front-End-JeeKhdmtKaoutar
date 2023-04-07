import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Produit} from "../../../controller/model/produit/produit";
import {CommandeProduit} from "../../../controller/model/commandeProduit/commande-produit";
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {CommandeProduitService} from "../../../controller/service/commandeProduit/commande-produit.service";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {
  commandeProduits!:Array<CommandeProduit>
  constructor(private produitService: ProduitService , private commandeService: CommandeService, private commandeProduitService: CommandeProduitService) {
  }

  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void {
    this.produitService.findAll().subscribe(data => this.produits = data)

  }
  commandeProduit = new CommandeProduit();
  public addToCard(produit : Produit): Array<CommandeProduit>{
    this.commandeProduit.produit=produit;
    this.commandeProduits.push(this.commandeProduit);
    return this.commandeProduits;
  }
  public save(): void {
    this.produitService.save(this.produit).subscribe(data => {
      if (data > 0) {
        alert("Done");
      } else {
        alert("Save Error");
      }
    })
  }

  get produit(): Produit {

    return this.produitService.produit;
  }

  set produit(value: Produit) {
    this.produitService.produit = value;
  }

  get produits(): Array<Produit> {

    return this.produitService.produits;
  }

  set produits(value: Array<Produit>) {
    this.produitService.produits = value;
  }


}
