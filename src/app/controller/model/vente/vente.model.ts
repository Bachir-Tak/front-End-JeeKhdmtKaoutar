import {Fournisseur} from "../fournisseur/fournisseur.model";
import {VenteProduit} from "../venteProduit/vente-produit.model";

export class Vente {
  public id !: number ;
  public ref !: string;
  public totalVente !: number;
  public dateVente !: Date;
  public fournisseur!: Fournisseur;
  public venteProduits!: Array<VenteProduit>;
}
