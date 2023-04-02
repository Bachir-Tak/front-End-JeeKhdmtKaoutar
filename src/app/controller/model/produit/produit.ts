import { CategorieProduit } from '../categorieProduit/categorie-produit';

export class Produit {
  public id!: number;
  public nom!: string;
  public ref!: string;
  public prixVente!: number;
  public categorieProduit!: CategorieProduit;
  public imgUrl!: string;
}
