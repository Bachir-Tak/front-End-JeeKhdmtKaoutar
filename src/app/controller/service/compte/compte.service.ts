import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../../model/compte/compte";
import {ClientService} from "../client/client.service";



@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private _compte !: Compte;
  private _comptes !: Array<Compte>;
  private url= "http://localhost:8033/GestionCommerciale/Compte/";
  constructor(private http:HttpClient, private clientService:ClientService) {}


  get compte(): Compte {
    if(this._compte == null){
      this._compte = new  Compte();
      this.compte.client=this.clientService.client;

    }
    return this._compte;
  }

  set compte(value: Compte) {
    this._compte = value;
  }

  get comptes(): Compte[] {
    if(this._comptes == null){
      this._comptes = new  Array<Compte>();
    }
    return this._comptes;
  }

  set comptes(value: Compte[]) {
    this._comptes = value;
  }
  public  findByEmail (compte: Compte):Observable<Compte>{
    return this.http.get<Compte>(this.url+'emai/'+compte.email);
  }
  public  save (compte:Compte):Observable<Compte>{
    return this.http.post<Compte>(this.url, compte);

  }

  public  findAll(): Observable<Array<Compte>>{
    return this.http.get<Array<Compte>>(this.url);
  }

}
