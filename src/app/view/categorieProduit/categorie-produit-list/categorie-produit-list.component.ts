
import {Component, OnInit} from '@angular/core';
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";
import {CategorieProduitService} from "../../../controller/service/categorieProduit/categorie-produit.service";

@Component({
  selector: 'app-categorie-produit-list',
  templateUrl: './categorie-produit-list.component.html',
  styleUrls: ['./categorie-produit-list.component.css']
})
export class CategorieProduitListComponent implements OnInit {
  constructor(private categorieProduitService: CategorieProduitService) {
  }

  ngOnInit(): void {
  }

  public findAll(): void {
    this.categorieProduitService.findall().subscribe(data => this.categorieProduits = data)

  }

  get categorieProduit(): CategorieProduit {

    return this.categorieProduitService.categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this.categorieProduitService.categorieProduit = value;
  }

  get categorieProduits(): Array<CategorieProduit> {

    return this.categorieProduitService.categorieProduits;
  }

  set categorieProduits(value: Array<CategorieProduit>) {
    this.categorieProduitService.categorieProduits = value;
  }

}
