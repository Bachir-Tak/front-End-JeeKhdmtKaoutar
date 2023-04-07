import {Component, OnInit} from '@angular/core';
import {Recu} from "../../../controller/model/recu/recu.model";
import {RecuService} from "../../../controller/service/recu/recu.service";


@Component({
  selector: 'app-recu-list',
  templateUrl: './recu-list.component.html',
  styleUrls: ['./recu-list.component.css']
})
export class RecuListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private recuService:RecuService) {
  }
  public findAll():void{
    this.recuService.findAll().subscribe(
      data => this.recus = data
    );
  }

  get recu(): Recu {
    return this.recuService.recu;
  }

  set recu(value: Recu) {
    this.recuService.recu = value;
  }

  get recus(): Array<Recu> {
    return this.recuService.recus;
  }

  set recus(value: Array<Recu>) {
    this.recuService.recus = value;
  }
  public deleteByCode(r : Recu, index:number):void {
    console.log('voila le code' + r.code);
    this.recuService.deleteByCode(r.code.toString()).subscribe(data => {
      if (data > 0) {
        this.recus.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }

}

