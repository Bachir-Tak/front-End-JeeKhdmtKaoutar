import {Fournisseur} from "../fournisseur/fournisseur.model";
import {Produit} from "../produit/produit";

export class FournisseurProduit {
  public id!: number;
  public fournisseur!:  Fournisseur;
  public produit!:  Produit;
}
