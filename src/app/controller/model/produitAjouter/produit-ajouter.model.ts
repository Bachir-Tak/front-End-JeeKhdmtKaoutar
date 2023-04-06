import {CategorieProduit} from "../categorieProduit/categorie-produit";

export class ProduitAjouter {
  public id!: number;
  public nom!: string;
  public ref!: string;
  public prixVente!: number;
  public categorieProduit!: CategorieProduit;
  public imgUrl!: string;
}
