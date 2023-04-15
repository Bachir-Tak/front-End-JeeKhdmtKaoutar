import {Commande} from "../commande/commande";


export class Livraison {
  public id !: number ;
  public ref !: String ;
  public date !: Date ;
  public commande !: Commande;
  public ville !: String;
}
