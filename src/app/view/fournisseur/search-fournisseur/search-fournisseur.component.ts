import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../controller/service/fournisseur/fournisseur.service";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";

@Component({
  selector: 'app-search-fournisseur',
  templateUrl: './search-fournisseur.component.html',
  styleUrls: ['./search-fournisseur.component.css']
})
export class SearchFournisseurComponent  implements OnInit{
  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
  }
  public search(): void{
    this.fournisseurService.findByCode(this.fournisseur.code).subscribe(data => this.fournisseur = data);
  }
  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }
  set fournisseur(value: Fournisseur) {
    this.fournisseurService.fournisseur = value;
  }


  get fournisseurs(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this.fournisseurService.fournisseurs = value;
  }
}
