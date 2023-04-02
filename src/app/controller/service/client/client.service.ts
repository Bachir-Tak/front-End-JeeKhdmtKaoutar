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

  private _url ="http://localhost:8033/GestionCommertiale/Client/";

  constructor(private _http:HttpClient) { }
  public findAll(): Observable<Array<Client>>{
    return this._http.get<Array<Client>>(this._url);
  }

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
  public  save ():Observable<Client>{
    return this._http.post<Client>(this._url, this.client);

}
  public deleteByCin(cin:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'cin/'+ cin);
    return this._http.delete<number>(this._url+ 'cin/' + cin);
  }
}
