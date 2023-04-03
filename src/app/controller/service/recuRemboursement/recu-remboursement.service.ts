import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {RecuRemboursement} from "../../model/recuRemboursement/recu-remboursement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecuRemboursementService {
  private _recuRemboursement!:RecuRemboursement;
  private _recuRemboursements!:Array<RecuRemboursement>;
  private _url = "http://localhost:8033/GestionCommertiale/RecuRemboursement";
  constructor(private _http:HttpClient) {}
  public save(recuRemboursement: RecuRemboursement):Observable<RecuRemboursement>{
    return this._http.post<RecuRemboursement>(this._url,this.recuRemboursement);
  }
  public findAll():Observable<Array<RecuRemboursement>>{
    return this._http.get<Array<RecuRemboursement>>(this._url);
  }
  public deleteByCode(code: string):Observable<number>{
    return this._http.delete<number>(this._url + 'code/' + code);
  }


  get recuRemboursement(): RecuRemboursement {
    if(this._recuRemboursement ==null){
      this._recuRemboursement= new RecuRemboursement();
    }
    return this._recuRemboursement;
  }

  set recuRemboursement(value: RecuRemboursement) {
    this._recuRemboursement = value;
  }

  get recuRemboursements(): Array<RecuRemboursement> {
    if(this._recuRemboursements ==null){
      this._recuRemboursements= new Array<RecuRemboursement>();
    }
    return this._recuRemboursements;
  }

  set recuRemboursements(value: Array<RecuRemboursement>) {
    this._recuRemboursements = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
