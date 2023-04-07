import {Component, OnInit} from '@angular/core';
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";
import {FournisseurService} from "../../../controller/service/fournisseur/fournisseur.service";

@Component({
  selector: 'app-fournisseur-create',
  templateUrl: './fournisseur-create.component.html',
  styleUrls: ['./fournisseur-create.component.css']
})
export class FournisseurCreateComponent implements OnInit {
  nouveauFournisseur = new Fournisseur();
  errorMessage!: string;

  constructor(private fournisseurService: FournisseurService ) {
    this.errorMessage = '';

  }

  ngOnInit(): void {
  }


  /*  onSubmit(formulaire: NgForm) {
      if (formulaire.valid) {
        const fournisseurAAjouter = {
          nom: this.nouveauFournisseur.nom,
          adresse: this.nouveauFournisseur.adresse,
          telephone: this.nouveauFournisseur.ville
        };
        this.fournisseurService.postFournisseur(fournisseurAAjouter).subscribe(
          () => {
            console.log('Fournisseur ajouté avec succès.');
            formulaire.reset();
            this.errorMessage = ''; // réinitialiser la propriété "errorMessage"
          },
          (erreur) => {
            console.log('Erreur lors de l\'ajout du fournisseur : ' + erreur);
            this.errorMessage = 'Une erreur est survenue lors de l\'ajout du fournisseur.';
          }
        );
      } else {
        this.errorMessage = 'Veuillez remplir tous les champs du formulaire.';
      }
    } */

  public save(): void {
    this.fournisseurService.save(this.fournisseur).subscribe(data => {
      if (data > 0) {
        this.fournisseur = new Fournisseur();
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
