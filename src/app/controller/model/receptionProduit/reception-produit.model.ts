import { Reception } from '../reception/reception.model';
import { Produit } from '../produit/produit.model';
export class ReceptionProduit {



  public id!: number;
  public reception!: Reception;
  public produit!: Produit;
  public quantite!: number;


}
