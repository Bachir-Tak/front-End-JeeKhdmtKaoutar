import {Component, OnInit} from '@angular/core';
import {FoutnisseurService} from "../../../controller/service/fournisseur/fournisseur.service";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";

@Component({
  selector: 'app-fournisseur-list',
  templateUrl: './fournisseur-list.component.html',
  styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
  constructor(private fournisseurService: FoutnisseurService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.fournisseurService.findall().subscribe(data => this.fournisseurs = data)

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
