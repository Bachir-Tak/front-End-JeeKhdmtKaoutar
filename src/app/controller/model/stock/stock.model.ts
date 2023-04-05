import { Magasin } from '../magasin/magasin.model';
import {Produit} from "../produit/produit";

export class Stock {

  public id!: number;
  public ref!: string;
  public magasin!: Magasin;
  public produit!: Produit;
  public quantite!: number;
  public quantiteEntree!: number;
  public quantiteSortie!: number;


}
