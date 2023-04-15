import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../model/client/client.model";
import {CompteService} from "../compte/compte.service";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _client !: Client;
  private _clients !: Array<Client>;

  private _url = "http://localhost:8033/GestionCommerciale/Client/";

  constructor(private _http: HttpClient) {
  }

  public findAll(): Observable<Array<Client>> {
    return this._http.get<Array<Client>>(this._url);
  }


  public findByCin(cin: string): Observable<Client> {
    return this._http.get<Client>(this._url + 'cin/' + cin);
  }

  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
      return this._client;

    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if (this._clients == null) {
      return this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }

  public save(): Observable<Client> {
    return this._http.post<Client>(this._url, this.client);

  }

  public deleteByCin(cin: string): Observable<number> {
    console.log('urrrllll ==>' + this._url + 'cin/' + cin);
    return this._http.delete<number>(this._url + 'cin/' + cin);
  }
}
