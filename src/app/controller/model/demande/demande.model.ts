import {Client} from "../client/client.model";
import {DemandeProduit} from "../demandeProduit/demande-produit.model";
export class Demande {
  public id !: number;

  public libelle !: string;

  public code !: string;
  public  client !: Client;
  public demandeProduits !: Array<DemandeProduit>;
}
