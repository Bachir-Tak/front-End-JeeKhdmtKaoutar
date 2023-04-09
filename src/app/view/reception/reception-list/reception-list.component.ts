import {Component, OnInit} from '@angular/core';
import {ReceptionService} from "../../../controller/service/reception/reception.service";
import {Reception} from "../../../controller/model/reception/reception";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";

@Component({
  selector: 'app-reception-list',
  templateUrl: './reception-list.component.html',
  styleUrls: ['./reception-list.component.css']
})
export class ReceptionListComponent implements OnInit{

  constructor(private receptionService:ReceptionService) {
  }
  ngOnInit(): void {
    this.findAll()
  }
  public findAll(): void{
    this.receptionService.findAll().subscribe(data => this.receptions= data);
  }

  get reception(): Reception {

    return this.receptionService.reception;
  }

  set reception(value: Reception) {
    this.receptionService.reception = value;
  }

  get receptions(): Array<Reception> {
    return this.receptionService.receptions;
  }

  set receptions(value: Array<Reception>) {
    this.receptionService.receptions = value;
  }
  public deleteByRef(reception: Reception, index: number): void {
    console.log('haaa ref' + reception.ref);
    this.receptionService.deleteByRef(reception.ref.toString()).subscribe(data => {
      if (data > 0) {
        this.receptions.splice(index, 1);
      } else {
        alert('Del Error');
      }
    });
  }
}
