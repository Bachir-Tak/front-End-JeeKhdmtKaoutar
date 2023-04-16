
import {Commande} from "../commande/commande";
import {Client} from "../client/client.model";
 export class Remboursement {
  public id !: number;
  public code !: string;

   public  commande !: Commande;
   public  client !: Client;


 }
