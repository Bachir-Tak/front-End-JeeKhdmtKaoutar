import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {Commande} from "../../../controller/model/commande/commande";


@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit{
  constructor(private commandeService: CommandeService) {
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.commandeService.save(this.commande).subscribe(data => {
      if(data != null){
        alert('SAVE SUCCESS');
      }else{
        alert('SAVE ERROR');
      }
    });
  }
  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }

}
