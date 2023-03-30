import {AchatCommande} from "../achatCommande/achat-commande";
import {HistoriqueAchat} from "../historiqueAchat/historique-achat";
import {Compte} from "../compte/compte";

export class Achat {
  public id!: number;
 public code!: string;

 public achatCommandes !: Array<AchatCommande>;
 public compte !: Compte;

 public historiqueAchat !: HistoriqueAchat;

}

