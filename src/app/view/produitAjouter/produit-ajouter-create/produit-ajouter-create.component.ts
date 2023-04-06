import {Component, OnInit} from '@angular/core';

import {ProduitAjouterService} from "../../../controller/service/produitAjouter/produit-ajouter.service";
import {ProduitAjouter} from "../../../controller/model/produitAjouter/produit-ajouter.model";
import {Produit} from "../../../controller/model/produit/produit";

@Component({
  selector: 'app-produit-ajouter-create',
  templateUrl: './produit-ajouter-create.component.html',
  styleUrls: ['./produit-ajouter-create.component.css']
})
export class ProduitAjouterCreateComponent implements OnInit{
  constructor( private  _produitAjouterService:ProduitAjouterService) {
  }
  ngOnInit(): void {
  }

  public save(): void {
    this._produitAjouterService.save().subscribe(data => {
      if (data != null) {
        alert("Done");
      } else {
        alert("Save Error");
      }
    })
  }
  get produitAjouter(): ProduitAjouter {


    return this._produitAjouterService.produitAjouter;
  }

  set produitAjouter(value: ProduitAjouter) {
    this._produitAjouterService.produitAjouter = value;
  }

  get produitAjouters(): Array<ProduitAjouter> {
    return this._produitAjouterService.produitAjouters;
  }

  set produitAjouters(value: Array<ProduitAjouter>) {
    this._produitAjouterService.produitAjouters = value;
  }

}
