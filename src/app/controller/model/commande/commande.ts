import { Client } from "../client/client.model";
import {CommandeProduit} from "../commandeProduit/commande-produit";


export class Commande {
  public id!: number;
  public ref!: string;

  public date !: Date;

  public commandeProduits =new Array<CommandeProduit>;

  public client !: Client;

}
