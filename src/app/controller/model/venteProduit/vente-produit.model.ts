import {Vente} from "../vente/vente.model";
import {Produit} from "../produit/produit";

export class VenteProduit {
  public id !: number ;
  public vente!: Vente ;
  public produit!: Produit ;

}
