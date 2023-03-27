
import {DemandeProduit} from "../demandeProduit/demande-produit";
import {Client} from "../client/client";
export class Demande {
  public id !: number;

  public libelle !: string;

  public code !: string;
  public  client !: Client;
  public demandeProduits !: DemandeProduit;
}
