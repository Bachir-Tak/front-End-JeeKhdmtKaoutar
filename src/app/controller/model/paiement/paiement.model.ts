import {Achat} from "../achat/achat";
import {Compte} from "../compte/compte";

export class Paiement {
  public id!: number;
  public code!: string;
  public paiementEffectue!: number;
  public achat!: Achat;
  public compte!: Compte;
}
