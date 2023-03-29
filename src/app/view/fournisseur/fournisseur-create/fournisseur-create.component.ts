import {Component, OnInit} from '@angular/core';

import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";
import {FournisseurService} from "../../../controller/service/fournisseur/fournisseur.service";

@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.css']
})
export class FournisseurCreateComponent implements OnInit {
  constructor(private fournisseurService: FournisseurService) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.fournisseurService.save().subscribe( data => {
      if (data != null) {
        alert("Done");
      } else {
        alert("Save Error");
      }
    })
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
