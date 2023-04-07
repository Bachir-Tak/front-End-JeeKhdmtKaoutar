import { Demande } from '../demande/demande.model';
import {Produit} from "../produit/produit";
export class DemandeProduit {


  public id!: number;
  public demande!: Demande;
  public produit!: Produit;
  public quantite!: number;

}
