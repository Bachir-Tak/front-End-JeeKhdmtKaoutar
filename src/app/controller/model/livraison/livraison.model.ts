
import {LivraisonCommande} from "../livraisonCommande/livraison-commande.model";
import {Achat} from "../achat/achat";

export class Livraison {
  public id !: number ;
  public ref !: String ;
  public date !: Date ;
  public achat !: Achat;
  public livraisonCommande !: LivraisonCommande;

}
