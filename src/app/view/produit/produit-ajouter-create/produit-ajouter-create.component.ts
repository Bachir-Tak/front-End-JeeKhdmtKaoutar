import {Component, OnInit} from '@angular/core';
import {Produit} from "../../../controller/model/produit/produit";
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";

@Component({
  selector: 'app-produit-ajouter-create',
  templateUrl: './produit-ajouter-create.component.html',
  styleUrls: ['./produit-ajouter-create.component.css']
})
export class ProduitAjouterCreateComponent implements OnInit{
  constructor(   private  produitService:ProduitService) {
  }
  ngOnInit(): void {
  }

  public save(): void {
    this.produitService.save(this.produit).subscribe(data => {
      if (data > 0) {
        this.produit= new Produit();
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
