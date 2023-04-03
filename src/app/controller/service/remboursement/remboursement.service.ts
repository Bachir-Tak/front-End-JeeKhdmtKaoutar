import { Injectable } from '@angular/core';
import {Remboursement} from "../../model/remboursement/remboursement.model";
import {Compte} from "../../model/compte/compte";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RemboursementService  {
  private _remboursement!:Remboursement;
  private _remboursements!:Array<Remboursement>;
  private _url = "http://localhost:8033/GestionCommertiale/Remboursement";
  constructor(private _http:HttpClient) {}
  public save(remboursement: Remboursement):Observable<Remboursement>{
    return this._http.post<Remboursement>(this._url,this.remboursement);
  }
  public findAll():Observable<Array<Remboursement>>{
    return this._http.get<Array<Remboursement>>(this._url);
  }
  public deleteByCode(code: string):Observable<number>{
    return this._http.delete<number>(this._url + 'code/' + code);
  }


  get remboursement(): Remboursement {
    if(this._remboursement ==null){
      this._remboursement= new Remboursement();
    }
    return this._remboursement;
  }

  set remboursement(value: Remboursement) {
    this._remboursement = value;
  }

  get remboursements(): Array<Remboursement> {
    if(this._remboursements ==null){
      this._remboursements= new Array<Remboursement>();
    }
    return this._remboursements;
  }

  set remboursements(value: Array<Remboursement>) {
    this._remboursements = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
