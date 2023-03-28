import {Compte} from "../compte/compte";
import {Ville} from "../ville/ville";

export class Client {
 public id !: number;

 public cin !: string;
  public  nom !: string;

  public prenom !: string;

  public ville !: Ville;

  public  comptes !: Array<Compte>;


}
