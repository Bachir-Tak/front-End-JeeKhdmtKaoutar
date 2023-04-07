import {CommandeProduit} from "../commandeProduit/commande-produit";
import {Produit} from "../produit/produit";

export class RecapitulatifAchat {
  public id!: number;
  public code!: string;
  public commandeProduit!: CommandeProduit;
  public montantTotal!: number;
  public produit!: Produit;

}
