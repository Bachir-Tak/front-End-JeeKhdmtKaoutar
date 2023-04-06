import {Component} from '@angular/core';
import {RemboursementService} from "../../../controller/service/remboursement/remboursement.service";
import {Remboursement} from "../../../controller/model/remboursement/remboursement.model";

@Component({
  selector: 'app-remboursement-list',
  templateUrl: './remboursement-list.component.html',
  styleUrls: ['./remboursement-list.component.css']
})
export class RemboursementListComponent {

  constructor(private remboursementService: RemboursementService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.remboursementService.findAll().subscribe(data => this.remboursements = data);
  }
  get remboursement(): Remboursement {
    return this.remboursementService.remboursement;
  }

  set remboursement(value: Remboursement) {
    this.remboursementService.remboursement = value;
  }

  get remboursements(): Array<Remboursement> {
    return this.remboursementService.remboursements;
  }

  set remboursements(value: Array<Remboursement>) {
    this.remboursementService.remboursements= value;
  }
  public deleteByCode(r: Remboursement, index:number):void {
    console.log('code' + r.code);
    this.remboursementService.deleteByCode(r.code.toString()).subscribe(data => {
      if (data > 0) {
        this.remboursements.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }
}
