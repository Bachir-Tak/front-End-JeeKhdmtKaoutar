import {CommandeProduit} from "../commandeProduit/commande-produit";
import {RecapulatifAchat} from "../recapulatifAchat/recapulatif-achat";

export class Commande {
  public id!: number;
  public ref!: string;

  public date !: Date;

  public commandeProduits !: Array<CommandeProduit>;

  public  recapitulatifAchat !: RecapulatifAchat;
}
