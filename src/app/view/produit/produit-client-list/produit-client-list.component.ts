import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Produit} from "../../../controller/model/produit/produit";

@Component({
  selector: 'app-produit-client-list',
  templateUrl: './produit-client-list.component.html',
  styleUrls: ['./produit-client-list.component.css']
})
export class ProduitClientListComponent implements OnInit {
  constructor(private produitService: ProduitService ) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.produitService.findAll().subscribe(data => this.produits = data)

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
