import { ReceptionProduit } from '../receptionProduit/reception-produitl';
import {Magasin} from "../magasin/magasin.model";
export class Reception {
  public id!: number;
  public ref!: string;
  public libelle!: string;
  public receptionProduit=new Array<ReceptionProduit>;
  public magasin!: Magasin;
  public dateReception!: Date;


}
