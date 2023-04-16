import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {CommandeProduit} from "../../../controller/model/commandeProduit/commande-produit";
import {Commande} from "../../../controller/model/commande/commande";
import {CommandeProduitService} from "../../../controller/service/commandeProduit/commande-produit.service";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  private _commandeProduits!: Array<CommandeProduit>;
  constructor(private commandeService: CommandeService , private commandeProduitService : CommandeProduitService, private appComponent:AppComponent) {
  }
  ngOnInit(): void {
    this.findByClientCin();
  }
  public findAll(): void{
    this.commandeService.findAll().subscribe(data => {this.commandes = data});
  }
  public findByClientCin(){
    // @ts-ignore
    return this.commandeService.findByClientCin(this.appComponent.connected[1]["client"]["cin"]).subscribe(data => this.commandes = data)
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
  get commandeProduit(): CommandeProduit {
    return this.commandeProduitService.commandeProduit;
  }

  set commandeProduit(value: CommandeProduit) {
    this.commandeProduitService.commandeProduit= value;
  }

  get commandeProduits(): Array<CommandeProduit> {
    return this.commandeProduitService.commandeProduits;
  }

  set commandeProduits(value: Array<CommandeProduit>) {
    this.commandeProduitService.commandeProduits = value;
  }
  public deleteByRef(commande: Commande, index:number):void {
    console.log('haaa cin' + commande.ref);
    this.commandeService.deleteByRef(commande.ref.toString()).subscribe(data => {
      if (data > 0) {
        this.commandes.splice(index, 1);
      } else {
        alert('Del Error');
      }
    });
  }


}
