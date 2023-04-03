import {Achat} from "../achat/achat";

export class HistoriqueAchat {
  public  id !: number;
   public ref !: string;
   public date!: Date;
   public total!: number;
  public  achats !: Array<Achat>;
}
