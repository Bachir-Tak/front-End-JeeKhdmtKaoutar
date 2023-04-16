import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande.model";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";


@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.component.html',
  styleUrls: ['./demande-list.component.css']
})
export class DemandeListComponent implements OnInit{
  constructor(private demandeService:DemandeService) {
  }
  ngOnInit() {
    this.findAll();
  }

  public findAll(): void{
    this.demandeService.findAll().subscribe(data => this.demandes = data);
  }
  public deleteByCode(demande: Demande, index: number): void {
    console.log('haaa code' + demande.code);
    this.demandeService.deleteByCode(demande.code.toString()).subscribe(data => {
      if (data > 0) {
        this.demandes.splice(index, 1);
      } else {
        alert('Del Error');
      }
    });
  }
  get demande(): Demande {

    return this.demandeService.demande;
  }

  set demande(value: Demande) {
    this.demandeService.demande = value;
  }

  get demandes(): Array<Demande> {
    return this.demandeService.demandes;
  }

  set demandes(value: Array<Demande>) {
    this.demandeService.demandes = value;
  }

}
