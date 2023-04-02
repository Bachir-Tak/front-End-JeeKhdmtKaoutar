import { Magasin } from '../magasin/magasin';
import { Produit } from '../produit/produit';
export class Stock {

  public id!: number;
  public ref!: string;
  public magasin!: Magasin;
  public produit!: Produit;
  public quantite!: number;
  public quantiteDefectueuse!: number;
  public quantiteEntree!: number;
  public quantiteSortie!: number;


}
