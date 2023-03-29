import {AvoirLivraison} from "../avoirLivraison/avoir-livraison.model";
 export class Remboursement {
  public id !: number;
  public code !: string;

  public  avoirLivraison !:AvoirLivraison;
}
