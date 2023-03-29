import {Component, OnInit} from '@angular/core';
import {VenteService} from "../../../controller/service/vente/vente.service";
import {Vente} from "../../../controller/model/vente/vente.model";

@Component({
  selector: 'app-vente-create',
  templateUrl: './vente-create.component.html',
  styleUrls: ['./vente-create.component.css']
})
export class VenteCreateComponent implements OnInit {
  constructor(private venteService: VenteService ) {
  }

  ngOnInit(): void {
  }

  public save(): void {
    this.venteService.save().subscribe(data => {
      if (data != null) {
        alert("Done") ;
      } else {
        alert("Save Error") ;
      }
    })
  }

  get vente(): Vente {

    return this.venteService.vente;
  }

  set vente(value: Vente) {
    this.venteService.vente = value;
  }

  get ventes(): Array<Vente> {

    return this.venteService.ventes;
  }

  set ventes(value: Array<Vente>) {
    this.venteService.ventes = value;
  }

}
