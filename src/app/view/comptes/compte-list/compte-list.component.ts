import {Component, OnInit} from '@angular/core';
import {CompteService} from "../../../controller/service/compte/compte.service";
import {Compte} from "../../../controller/model/compte/compte";

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements  OnInit{
  constructor(private  compteService: CompteService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.compteService.findAll().subscribe(data => this.comptes = data);
  }
  get compte(): Compte {
    return this.compteService.compte;
  }

  set compte(value: Compte) {
    this.compteService.compte = value;
  }

  get comptes(): Compte[] {
    return this.compteService.comptes;
  }

  set comptes(value: Compte[]) {
    this.compteService.comptes = value;
  }
}
