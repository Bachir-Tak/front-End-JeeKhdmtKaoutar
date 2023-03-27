import {AchatCommande} from "../achatCommande/achat-commande";
import {Client} from "../client/client";
import {HistoriqueAchat} from "../historiqueAchat/historique-achat";

export class Achat {
  public id!: number;
 public code!: string;

 public achatCommandes !: Array<AchatCommande>;
 public client !: Client;

 public historiqueAchat !: HistoriqueAchat;

}

