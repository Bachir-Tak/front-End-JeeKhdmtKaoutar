import { Injectable } from '@angular/core';
import {Livraison} from "../../model/livraison/livraison.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private _livraison !: Livraison;
  private _livraisons !: Array<Livraison>;
  private _url="http://localhost:8033/GestionCommerciale/Livraison/";

  public save(livraison : Livraison):Observable<number>{
    return this._http.post<number>(this._url,livraison);
  }

  public deleteByRef(ref:string):Observable<number>{
    return this._http.delete<number>(this._url + 'livraison/' + ref);
  }



  public findAll():Observable<Array<Livraison>>{
    return this._http.get<Array<Livraison>>(this._url);
  }
  constructor(private _http: HttpClient) { }


  get livraison(): Livraison {
    if (this._livraison == null)
    {
      return this._livraison = new Livraison();
    }
    return this._livraison;
  }

  set livraison(value: Livraison) {
    this._livraison = value;
  }


  get livraisons(): Array<Livraison> {
    if (this._livraisons == null)
    {
      return this._livraisons = new Array<Livraison>();
    }
    return this._livraisons;
  }

  set livraisons(value: Array<Livraison>) {
    this._livraisons = value;
  }
}
