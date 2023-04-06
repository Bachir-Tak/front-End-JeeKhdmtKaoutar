import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Compte} from "../../model/compte/compte";



@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private _compte !: Compte;
  private _comptes !: Array<Compte>;
  private url= "http://localhost:8033/GestionCommertiale/Compte";
  constructor(private http:HttpClient) {}


  get compte(): Compte {
    if(this._compte == null){
      this._compte = new  Compte();
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
    return this.http.get<Compte>(this.url+'/emai/'+compte.email);
  }

  public  findAll(): Observable<Array<Compte>>{
    return this.http.get<Array<Compte>>(this.url);
  }

}
