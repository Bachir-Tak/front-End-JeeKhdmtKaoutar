import { Produit } from '../produit/produit.model';

export class CategorieProduit {

  public id!: number;
  public code!: string;
  public produits!: Array<Produit>;

}