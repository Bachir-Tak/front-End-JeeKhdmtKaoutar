import {Compte} from '../compte/compte.model'
export class Client {
  public id !:number;

  public nom!:string;

  public prenom!:string;

  public cin!:string;

  public comptes!:Array<Compte>;
}
