import { Injectable } from '@angular/core';
import {Client} from "../../model/client/client";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _client !: Client;
  private _clients !: Array<Client>;

  private url ="http://localhost:8033/GestionCommertiale/Client";

  constructor(private http:HttpClient) { }

  get client(): Client {
    if(this._client == null){
      return this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if(this._clients == null){
      return this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
  public  save (client: Client):Observable<number>{
    return this.http.post<number>(this.url, this.client);
  }public  findAll(): Observable<Array<Client>>{
    return this.http.get<Array<Client>>(this.url);
  }
}
