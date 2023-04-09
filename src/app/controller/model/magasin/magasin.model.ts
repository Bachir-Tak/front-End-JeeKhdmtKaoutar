import { Stock } from '../stock/stock.model';
export class Magasin {
  public id!: number;
  public libelle!: string;
  public code!: string;
  public stocks= new Array<Stock>;


}
