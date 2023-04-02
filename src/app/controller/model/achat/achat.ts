import {AchatCommande} from "../achatCommande/achat-commande";
import {HistoriqueAchat} from "../historiqueAchat/historique-achat";
import {Client} from "../client/client";

export class Achat {
  public id!: number;
 public code!: string;

 public achatCommandes !: Array<AchatCommande>;
 public client !: Client;

 public historiqueAchat !: HistoriqueAchat;

}

