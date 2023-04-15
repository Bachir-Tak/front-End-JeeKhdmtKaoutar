import {AvoirLivraison} from "../avoirLivraison/avoir-livraison.model";
import {Livraison} from "../livraison/livraison.model";
import {Commande} from "../commande/commande";
import {Client} from "../client/client.model";
 export class Remboursement {
  public id !: number;
  public code !: string;

  public  avoirLivraison !:AvoirLivraison;
   public  livraison !:Livraison;
   public  commande !: Commande;
   public  client !: Client;


 }
