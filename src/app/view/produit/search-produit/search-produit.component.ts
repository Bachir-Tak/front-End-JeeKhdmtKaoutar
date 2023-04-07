import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../controller/service/client/client.service";
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Produit} from "../../../controller/model/produit/produit";

@Component({
  selector: 'app-search-produit',
  templateUrl: './search-produit.component.html',
  styleUrls: ['./search-produit.component.css']
})
export class SearchProduitComponent implements OnInit{
  constructor(private produitService : ProduitService) {
  }
  ngOnInit(): void {
  }
  public search(): void{
    this.produitService.findByRef(this.produit.ref).subscribe(data => this.produit = data);
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
