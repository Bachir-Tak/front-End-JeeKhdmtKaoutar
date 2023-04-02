import { Client } from '../client/client.model';

export class Compte {

  public id!: number;
  public email!: string;
  public motDePasse!: string;
  public client!: Client;

}
