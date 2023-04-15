import {CategorieProduit} from "../categorieProduit/categorie-produit";

export class Produit {
  public id!: number;
  public nom!: string;
  public ref!: string;
  public description!: string;
  public prixVente!: number;
  public image!: string;


  public categorieProduit !: CategorieProduit;
}
