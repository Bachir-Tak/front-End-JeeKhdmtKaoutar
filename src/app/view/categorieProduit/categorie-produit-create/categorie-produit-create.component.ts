import {Component, OnInit} from '@angular/core';
import {CategorieProduitService} from "../../../controller/service/categorieProduit/categorie-produit.service";
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";

@Component({
  selector: 'app-categorie-produit-create',
  templateUrl: './categorie-produit-create.component.html',
  styleUrls: ['./categorie-produit-create.component.css']
})
export class CategorieProduitCreateComponent implements OnInit {
  constructor(private categorieProduitService: CategorieProduitService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.categorieProduitService.save(this.categorieProduit).subscribe(data => {
      if (data > 0) {
        this.categorieProduit = new CategorieProduit();
        alert("Done");
      } else {
        alert("Save Error");
      }
    });
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
