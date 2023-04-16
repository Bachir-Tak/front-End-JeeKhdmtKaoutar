import {Component, OnInit} from '@angular/core';
import {Recu} from "src/app/controller/model/recu/recu.model";
import {RecuService} from "src/app/controller/service/recu/recu.service";
import {ActivatedRoute} from "@angular/router";
import {PaiementService} from "../../../controller/service/paiement/paiement.service";


@Component({
  selector: 'app-recu-create',
  templateUrl: './recu-create.component.html',
  styleUrls: ['./recu-create.component.css']
})
export class RecuCreateComponent implements OnInit{
  ngOnInit(): void {
    this.paiementSerivce.findByCode(this.route.snapshot.params["PaiementCode"]).subscribe(data=>{this.recu.paiement=data});

  }
  public save(): void{
    this.recuService.save(this.recu).subscribe(
      data => {
        if (data == null) {
          alert('failure : code exist')
        }else{
          //this.recu = null;
          alert('success : recu sav')
        }
      }
    );
  }
  constructor(private recuService: RecuService,private route:ActivatedRoute,private paiementSerivce:PaiementService) {
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



}
