import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../../model/commande/commande";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _commande !: Commande;
  private _commandes !: Array<Commande>;

  private url="http://localhost:8033/GestionCommertiale/Commande";

  constructor(private http:HttpClient) {
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
    return this.http.post<number>(this.url, this.commande);
  }public  findAll(): Observable<Array<CommandeService>>{
    return this.http.get<Array<CommandeService>>(this.url);
  }



}
