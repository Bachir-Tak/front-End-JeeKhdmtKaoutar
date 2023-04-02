import {Commande} from "../commande/commande";
import {Produit} from "../produit/produit";

export class CommandeProduit {
  public id!: number;

  public quantite !: number;

  public prixUnitaire !: number;

  public prixTotale !: number;

  public  commande !: Commande;

  public produit !: Produit;
}
