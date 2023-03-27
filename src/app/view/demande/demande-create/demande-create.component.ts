import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande";


@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit{

  constructor(private demandeService : DemandeService) {

  }
  public save():void {
    this.demandeService.save().subscribe(data=>alert("azdaz"))
  }
  ngOnInit(): void {

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
