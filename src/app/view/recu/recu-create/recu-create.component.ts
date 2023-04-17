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

  savedRecu!: Recu;

  constructor(private recuService: RecuService, private route: ActivatedRoute, private paiementSerivce: PaiementService) { }

  ngOnInit(): void {
    const paiementCode = this.route.snapshot.params['PaiementCode'];
    this.paiementSerivce.findByCode(paiementCode).subscribe(
      (paiement) => {
        this.recu.paiement = paiement;
        this.recuService.save(this.recu).subscribe(
          (savedRecu) => {
            if (savedRecu) {
              this.savedRecu = savedRecu;
              alert('Success : recu saved');
            } else {
              alert('Failure : code exist');
            }
          },
          (error) => {
            console.log(error);
            alert('Error : failed to save recu');
          }
        );
      },
      (error) => {
        console.log(error);
        alert('Error : failed to load paiement');
      }
    );
  }

  get recu(): Recu {
    return this.recuService.recu;
  }

  set recu(value: Recu) {
    this.recuService.recu = value;
  }

  public save(): void {
    if (!this.savedRecu) {
      this.recuService.save(this.recu).subscribe(
        (data) => {
          if (data) {
            this.savedRecu = data;
            alert('Success : recu saved');
          } else {
            alert('Failure : code exist');
          }
        },
        (error) => {
          console.log(error);
          alert('Error : failed to save recu');
        }
      );
    }
  }

}
