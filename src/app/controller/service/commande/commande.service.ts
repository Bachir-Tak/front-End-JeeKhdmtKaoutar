import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../../model/commande/commande";
import {CommandeProduit} from "../../model/commandeProduit/commande-produit";
import {Client} from "../../model/client/client.model";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _commande !: Commande;
  private _commandeProduit!:CommandeProduit;

  private _commandes !: Array<Commande>;

  private _url="http://localhost:8033/GestionCommerciale/Commande/";


  constructor(private _http:HttpClient) {
  }


  get commande(): Commande {
    if(this._commande == null){
      return  this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if(this._commandes == null){
      return this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  public  save(commandeService: Commande):Observable<number>{
    return this._http.post<number>(this._url, this.commande);
  }public  findAll(): Observable<Array<Commande>>{
    return this._http.get<Array<Commande>>(this._url);
  }
  public findByClientCin(cin: string): Observable<Array<Commande>> {
    return this._http.get<Array<Commande>>(this._url + 'cin/' + cin);
  }
  public  findByRef(ref:string): Observable<Commande>{
    return this.http.get<Commande>(this.url+'ref/' + ref);
  }
  get commandeProduit(): CommandeProduit {
    if (this._commandeProduit==null)
    {
      this._commandeProduit=new CommandeProduit();
    }
    return this._commandeProduit;
  }

  set commandeProduit(value: CommandeProduit) {
    this._commandeProduit = value;
  }

  public addCommandeProduit(){
    this.commande.commandeProduits.push(this.commandeProduit)
  }
  public deleteByRef(ref: string): Observable<number> {
    console.log('urrrllll ==>' + this._url + 'ref/' + ref);
    return this._http.delete<number>(this._url + 'ref/' + ref);
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }


}
