import {Component, OnInit} from '@angular/core';
import {VenteService} from "../../../controller/service/vente/vente.service";
import {Vente} from "../../../controller/model/vente/vente.model";

@Component({
  selector: 'app-vente-list',
  templateUrl: './vente-list.component.html',
  styleUrls: ['./vente-list.component.css']
})
export class VenteListComponent implements OnInit  {
  constructor(private venteService: VenteService) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll(): void {
    this.venteService.findall().subscribe(data => this.ventes = data)

  }

  get vente(): Vente {

    return this.venteService.vente;
  }

  set vente(value: Vente) {
    this.venteService.vente = value;
  }

  get ventes(): Array<Vente> {

    return this.venteService.ventes ;
  }

  set ventes(value: Array<Vente>) {
    this.venteService.ventes = value ;
  }

}
