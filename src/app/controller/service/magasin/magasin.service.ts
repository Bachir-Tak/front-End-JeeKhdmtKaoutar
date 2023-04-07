import { Injectable } from '@angular/core';
import {Magasin} from "../../model/magasin/magasin.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MagasinService {
  private _magasin!:Magasin;
  private _magasins!:Array<Magasin>;

  private _url ="http://localhost:8033/GestionCommertiale/Magasin/";

  save(magasin:Magasin):Observable<Magasin>{
    return this.http.post<Magasin>(this._url,magasin);
  }
  public findAll(): Observable<Array<Magasin>>{
    return this.http.get<Array<Magasin>>(this._url);
  }
  constructor(private http:HttpClient) { }


  get magasin(): Magasin {
    if (this._magasin==null)
    {
      this._magasin=new Magasin();
    }
    return this._magasin;
  }

  set magasin(value: Magasin) {

    this._magasin = value;
  }

  get magasins(): Array<Magasin> {
    if (this._magasins==null)
    {
      this._magasins=new Array<Magasin>();
    }
    return this._magasins;
  }

  set magasins(value: Array<Magasin>) {
    this._magasins = value;
  }

}
