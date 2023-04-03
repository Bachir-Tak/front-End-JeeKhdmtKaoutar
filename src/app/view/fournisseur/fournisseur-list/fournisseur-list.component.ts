import {Component, OnInit} from '@angular/core';
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";
import {FournisseurService} from "../../../controller/service/fournisseur/fournisseur.service";

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.fournisseurService.findAll().subscribe(data => this.fournisseurs = data)

  }

  public deleteByCode(fournisseur: Fournisseur, index: number): void {
    console.log('haaa code' + fournisseur.code);
    this.fournisseurService.deleteByCode(fournisseur.code.toString()).subscribe(data => {
      if (data > 0) {
        this.fournisseurs.splice(index, 1);
      } else {
        alert('Del Error');
      }
    })
  };


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


