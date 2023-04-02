
import { Produit } from '../produit/produit';
import {Demande} from "../demande/demande";
export class DemandeProduit {


  public id!: number;
  public demande!: Demande;
  public produit!: Produit;
  public quantite!: number;

}
