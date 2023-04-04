
import {Component, OnInit} from '@angular/core';
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";
import {CategorieProduitService} from "../../../controller/service/categorieProduit/categorie-produit.service";
import {Client} from "../../../controller/model/client/client.model";

@Component({
  selector: 'app-categorie-produit-list',
  templateUrl: './categorie-produit-list.component.html',
  styleUrls: ['./categorie-produit-list.component.css']
})
export class CategorieProduitListComponent implements OnInit {
  constructor(private categorieProduitService: CategorieProduitService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.categorieProduitService.findall().subscribe(data => this.categorieProduits = data)

  }
  public save(): void {
    this.categorieProduitService.save().subscribe(data => {
      if (data != null) {
        alert("Done");
      } else {
        alert("Save Error");
      }
    })
  }
  public deleteByCode(categorieProduit: CategorieProduit, index:number):void {
    console.log('haaa code' + categorieProduit.code);
    this.categorieProduitService.deleteByCode(categorieProduit.code.toString()).subscribe(data => {
      if (data > 0) {
        this.categorieProduits.splice(index, 1);
      } else {
        alert('Del Error');
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
