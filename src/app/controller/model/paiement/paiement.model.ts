import {Commande} from "../commande/commande";
import {Compte} from "../compte/compte";

export class Paiement {
  public id!: number;
  public code!: string;
  public paiementEffectue!: boolean;
  public commande!: Commande;
  public compte!: Compte;
}
