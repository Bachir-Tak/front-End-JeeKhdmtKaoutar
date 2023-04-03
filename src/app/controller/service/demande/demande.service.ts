import { Injectable } from '@angular/core';
import {Demande} from "../../model/demande/demande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande !: Demande ;
  private _demandes !: Array<Demande>;
  private _url ="http://localhost:8033/GestionCommertiale/Demande/";

  save(demande:Demande,clientId:number):Observable<Demande>{
    //demande.client=clientService.findById(clientId);
    return this.http.post<Demande>(this._url,demande);
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
      this._demandes=new Array<Demande>();
    }
    return this._demandes;
  }

  set demandes(value: Array<Demande>) {
    this._demandes = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
