import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from "../../../controller/service/categorieProduit/categorie-produit.service";
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";

@Component({
  selector: 'app-search-categorie',
  templateUrl: './search-categorie.component.html',
  styleUrls: ['./search-categorie.component.css']
})
export class SearchCategorieComponent implements  OnInit{
  constructor(private categorieProduitService: CategorieProduitService) {
  }
  ngOnInit(): void {
  }
  public search(): void{
    this.categorieProduitService.findByCode(this.categorieProduit.code).subscribe(data => this.categorieProduit= data);
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
