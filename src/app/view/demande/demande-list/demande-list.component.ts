import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande.model";


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
