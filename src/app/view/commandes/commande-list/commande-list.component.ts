import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../controller/service/commande/commande.service";
import {CommandeProduitService} from "../../../controller/service/commandeProduit/commande-produit.service";
import {CommandeProduit} from "../../../controller/model/commandeProduit/commande-produit";
import {Produit} from "../../../controller/model/produit/produit";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {
  private _commandeProduits!: Array<CommandeProduit>;
  constructor(private commandeService: CommandeService, private commandeProduitService: CommandeProduitService) {
  }
  ngOnInit(): void {
  }
 public addToCard(produit : Produit): void{
   let commandeProduit = new CommandeProduit();
    commandeProduit.produit = produit;
    this._commandeProduits.push(commandeProduit);
 }
  get commandeProduits(): Array<CommandeProduit> {
    return this._commandeProduits;
  }

  set commandeProduits(value: Array<CommandeProduit>) {
    this._commandeProduits = value;
  }

}
