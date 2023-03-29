import {Component, OnInit} from '@angular/core';
import {RecuRemboursementService} from "../../../controller/service/recuRemboursement/recu-remboursement.service";
import {RecuRemboursement} from "../../../controller/model/recuRemboursement/recu-remboursement";

@Component({
  selector: 'app-recuRemboursement-create',
  templateUrl: './recu-remboursement-create.component.html',
  styleUrls: ['./recu-remboursement-create.component.css']
})
export class RecuRemboursementCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save():void{
    this.recuRemboursementService.save(this.recuRemboursement).subscribe(
      data=>{
        if(data==null){
          alert('code exist')
        }
        else{
          alert('success: remboursement save')
        }

      }
    );
  }
  constructor(private recuRemboursementService: RecuRemboursementService) {
  }
  get recuRemboursement(): RecuRemboursement {

    return this.recuRemboursement;
  }

  set recuRemboursement(value: RecuRemboursement) {
    this.recuRemboursement = value;
  }

  get recuRemboursements(): Array<RecuRemboursement> {

    return this.recuRemboursements;
  }

  set recuRemboursements(value: Array<RecuRemboursement>) {
    this.recuRemboursements = value;
  }

}

