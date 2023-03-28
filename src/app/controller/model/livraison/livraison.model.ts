import {Achat} from '../achat/achta.model';
import {LivraisonCommande} from "../livraisonCommande/livraison-commande.model";

export class Livraison {
  public id !: number ;
  public ref !: String ;
  public date !: Date ;
  public achat !: Achat;
  public livraisonCommande !: LivraisonCommande;

}
