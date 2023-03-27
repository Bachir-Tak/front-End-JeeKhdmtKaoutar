import { ReceptionProduit } from '../receptionProduit/reception-produit.model';
import { Stock } from '../stock/stock.model';
export class Reception {
  public id!: number;
  public ref!: string;
  public libelle!: string;
  public receptionProduit!: Array<ReceptionProduit>;
  public stock!: Stock;
  public dateReception!: Date;


}
