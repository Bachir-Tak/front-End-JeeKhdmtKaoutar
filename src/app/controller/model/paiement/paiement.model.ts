import {Commande} from "../commande/commande";
import {Compte} from "../compte/compte";

export class Paiement {
  public id!: number;
  public code!: string;
  public paiementEffectue!: number;
  public commande!: Commande;
  public compte!: Compte;
}
