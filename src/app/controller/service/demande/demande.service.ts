import { Injectable } from '@angular/core';
import {Demande} from "../../model/demande/demande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DemandeProduit} from "../../model/demandeProduit/demande-produit.model";


@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private _demande !: Demande ;

  private _demandeProduit!:DemandeProduit;
  private _demandes !: Array<Demande>;
  private _url ="http://localhost:8033/GestionCommerciale/Demande/";

  save(demande:Demande):Observable<number>{
    return this.http.post<number>(this._url,demande);
  }
  public findAll(): Observable<Array<Demande>>{
    return this.http.get<Array<Demande>>(this._url);
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

  get demandeProduit(): DemandeProduit {
    if (this._demandeProduit==null)
    {
      this._demandeProduit=new DemandeProduit();
    }
    return this._demandeProduit;
  }

  set demandeProduit(value: DemandeProduit) {
    this._demandeProduit = value;
  }

  public addDemandeProduit(){
    this.demande.demandeProduits.push(this.demandeProduit)
  }




}
