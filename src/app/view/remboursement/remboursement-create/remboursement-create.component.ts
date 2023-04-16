import {Component, OnInit} from '@angular/core';
import {RemboursementService} from "../../../controller/service/remboursement/remboursement.service";
import {Remboursement} from "../../../controller/model/remboursement/remboursement.model";
import {AppComponent} from "../../../app.component";
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {Commande} from "../../../controller/model/commande/commande";


@Component({
  selector: 'app-remboursement-create',
  templateUrl: './remboursement-create.component.html',
  styleUrls: ['./remboursement-create.component.css']
})
export class RemboursementCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save():void{
    // @ts-ignore
    this.remboursement.client=this.appComponent.connected[1]["client"];
    this.commandeSerivce.findByRef(this.commande.ref).subscribe(data=>{this.remboursement.commande=data;
      this.remboursementService.save(this.remboursement).subscribe(
        data=>{
          if(data==null){
            alert('code exist')
          }
          else{
            alert('success: remboursement save')
          }

        }
      );})

  }
  constructor(private remboursementService: RemboursementService,private appComponent:AppComponent,private commandeSerivce:CommandeService) {
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
    this.remboursementService.remboursements = value;
  }
  get commande(): Commande {
    return this.remboursementService.commande;
  }

  set commande(value: Commande) {
    this.remboursementService.commande = value;
  }

}
