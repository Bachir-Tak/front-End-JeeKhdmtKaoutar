import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Produit} from "../../../controller/model/produit/produit";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {
  constructor(private produitService: ProduitService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.produitService.save(this.produit).subscribe(data => {
      if (data != null) {
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
