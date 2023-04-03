import { Injectable } from '@angular/core';
import {DemandeProduit} from "../../model/demandeProduit/demande-produit.model";
import {HttpClient} from "@angular/common/http";
import {Demande} from "../../model/demande/demande.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemandeProduitService {
  private _demandeProduit!:DemandeProduit;
  private _demandeProduits!:Array<DemandeProduit>;

  private _url ="http://localhost:8033/GestionCommertiale/DemandeProduit/";
  save(demande:Demande,clientId:number):Observable<Demande>{
    //demande.client=clientService.findById(clientId);
    return this.http.post<Demande>(this._url,demande);
  }
  constructor(private  http: HttpClient) { }


  get demandeProduit(): DemandeProduit {

    if(this._demandeProduit==null)
    {
      this._demandeProduit=new DemandeProduit();
    }
    return this._demandeProduit;
  }

  set demandeProduit(value: DemandeProduit) {
    this._demandeProduit = value;
  }

  get demandeProduits(): Array<DemandeProduit> {
    if(this._demandeProduits==null)
    {
      this._demandeProduits=new Array<DemandeProduit>();
    }
    return this._demandeProduits;
  }

  set demandeProduits(value: Array<DemandeProduit>) {
    this._demandeProduits = value;
  }
}
