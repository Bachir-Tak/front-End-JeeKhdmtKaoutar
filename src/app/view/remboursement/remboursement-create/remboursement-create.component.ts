import {Component, OnInit} from '@angular/core';
import {RemboursementService} from "../../../controller/service/remboursement/remboursement.service";
import {Remboursement} from "../../../controller/model/remboursement/remboursement.model";

@Component({
  selector: 'app-remboursement-create',
  templateUrl: './remboursement-create.component.html',
  styleUrls: ['./remboursement-create.component.css']
})
export class RemboursementCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save():void{
    this.remboursementService.save(this.remboursement).subscribe(
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
  constructor(private remboursementService: RemboursementService) {
  }
  get remboursement(): Remboursement {

    return this.remboursement;
  }

  set remboursement(value: Remboursement) {
    this.remboursement = value;
  }

  get remboursements(): Array<Remboursement> {

    return this.remboursements;
  }

  set remboursements(value: Array<Remboursement>) {
    this.remboursements = value;
  }

}
