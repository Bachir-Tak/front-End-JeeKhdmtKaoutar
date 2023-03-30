import {CommandeProduit} from "../commandeProduit/commande-produit";
import {RecapitulatifAchat} from "../recapitulatifAchat/recapitulatifAchat.model";


export class Commande {
  public id!: number;
  public ref!: string;

  public date !: Date;

  public commandeProduits !: Array<CommandeProduit>;

  public  recapitulatifAchat !: RecapitulatifAchat;
}
