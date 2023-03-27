import { Injectable } from '@angular/core';
import {CommandeProduit} from "../../model/commandeProduit/commande-produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeProduitService {

  private _commandeProduit !: CommandeProduit;
  private _commandeProduits !: Array<CommandeProduit>;

  private url="http://localhost:8033/GestionCommertiale/CommandeProduit";

  constructor(private http:HttpClient) { }

  get commandeProduit(): CommandeProduit {
    if(this._commandeProduit == null){
      return this._commandeProduit = new CommandeProduit();
    }
    return this._commandeProduit;
  }

  set commandeProduit(value: CommandeProduit) {
    this._commandeProduit = value;
  }

  get commandeProduits(): Array<CommandeProduit> {
    if(this._commandeProduits == null){
      return this._commandeProduits = new Array<CommandeProduit>();
    }
    return this._commandeProduits;
  }

  set commandeProduits(value: Array<CommandeProduit>) {
    this._commandeProduits = value;
  }
  public  save (commandeProduitService: CommandeProduitService):Observable<number>{
    return this.http.post<number>(this.url, this.commandeProduit);
  }public  findAll(): Observable<Array<CommandeProduitService>>{
    return this.http.get<Array<CommandeProduitService>>(this.url);
  }
}
