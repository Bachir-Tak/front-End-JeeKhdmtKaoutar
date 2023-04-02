import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Demande} from "../../model/demande/demande";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande !: Demande ;
  private _demandes !: Array<Demande>;
  private url ="http://localhost:8033/GestionCommertiale/Demande";

  save():Observable<number>{
    return this.http.post<number>(this.url,this.demande);
  }
  constructor(private  http: HttpClient) { }


  get demande(): Demande {
    if (this._demande== null)
    {
      return this._demande=new Demande();
    }
    return this._demande;
  }

  set demande(value: Demande) {
    this._demande = value;
  }

  get demandes(): Array<Demande> {
    if (this._demandes== null)
    {
      return this._demandes=new Array<Demande>();
    }
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }
}
