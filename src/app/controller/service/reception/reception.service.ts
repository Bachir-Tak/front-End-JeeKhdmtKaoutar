import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Reception} from "../../model/reception/reception";
import {Observable} from "rxjs";
import {ReceptionProduit} from "../../model/receptionProduit/reception-produitl";


@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  private _reception !: Reception
  private _receptionProduit!: ReceptionProduit

  private _receptions !: Array<Reception>;

  private _url ="http://localhost:8033/GestionCommerciale/Reception/";

  public save (reception:Reception):Observable<Reception>{
    return this.http.post<Reception>(this._url,reception);
  }
  public findAll(): Observable<Array<Reception>>{
    return this.http.get<Array<Reception>>(this._url);
  }
  public deleteByRef(ref:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'ref/'+ ref);
    return this.http.delete<number>(this._url+ 'ref/' + ref);
  }

  constructor(private  http: HttpClient) { }


  get reception(): Reception {
    if (this._reception== null)
    {
      return this._reception=new Reception();
    }
    return this._reception;
  }

  set reception(value: Reception) {
    this._reception = value;
  }

  get receptions(): Array<Reception> {
    if (this._receptions== null)
    {
      this._receptions=new Array<Reception>();
    }
    return this._receptions;
  }

  set receptions(value: Array<Reception>) {
    this._receptions = value;
  }

  get receptionProduit(): ReceptionProduit {
    if (this._receptionProduit==null)
    {
      this._receptionProduit=new ReceptionProduit();
    }
    return this._receptionProduit;
  }

  set receptionProduit(value: ReceptionProduit) {
    this._receptionProduit = value;
  }

  public addReceptionProduit(){
    this.reception.receptionProduit.push(this.receptionProduit)
  }
}
