import {Produit} from "../produit/produit";
import {Paiement} from "../paiement/paiement.model";
import {CommandeProduit} from "../commandeProduit/commande-produit";

export class Recu {
  public id!: number;
  public code!: string;
  public libelle!: number;
  public produit!: Produit;
  public paiement!: Paiement;
  public commandeProduit!: CommandeProduit;
}
