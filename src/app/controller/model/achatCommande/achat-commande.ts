import {Achat} from "../achat/achat";
import {Commande} from "../commande/commande";

export class AchatCommande {
  public id !: number;
  public achat !: Achat;

  public  commande!: Commande;
}
