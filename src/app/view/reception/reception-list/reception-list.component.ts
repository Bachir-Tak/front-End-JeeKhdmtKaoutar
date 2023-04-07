import {Component, OnInit} from '@angular/core';
import {ReceptionService} from "../../../controller/service/reception/reception.service";
import {Reception} from "../../../controller/model/reception/reception";

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
}
