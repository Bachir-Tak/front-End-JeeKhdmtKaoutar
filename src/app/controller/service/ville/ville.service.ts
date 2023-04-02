import { Injectable } from '@angular/core';
import {Ville} from "../../model/ville/ville";
import {HttpClient} from "@angular/common/http";
import {HistoriqueAchat} from "../../model/historiqueAchat/historique-achat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private _ville !: Ville;
  private _villes !: Array<Ville>;

  private url ="http://localhost:8033/GestionCommertiale/Ville/";

  constructor(private  http:HttpClient) { }

  get ville(): Ville {
    if(this._ville== null){
      return this._ville = new Ville();
    }
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  get villes(): Array<Ville> {
    if(this._villes == null){
      return this._villes = new Array<Ville>();
    }
    return this._villes;
  }

  set villes(value: Array<Ville>) {
    this._villes = value;
  }
  public  save (ville: Ville):Observable<number>{
    return this.http.post<number>(this.url, this.ville);
  }
  public  findAll(): Observable<Array<Ville>>{
    return this.http.get<Array<Ville>>(this.url);
  }
}
