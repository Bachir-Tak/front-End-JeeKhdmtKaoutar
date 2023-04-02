import { Injectable } from '@angular/core';
import {AvoirLivraison} from "../../model/avoirLivraison/avoir-livraison.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AvoirLivraisonService {
  private _avoirLivraison !: AvoirLivraison;
  private _avoirLivraisons !: Array<AvoirLivraison>;
  private _url ="http://localhost:8033/GestionCommertiale/AvoirLivraison";

  public save():Observable<number>{
    return this.http.post<number>(this._url,this.avoirLivraison);
  }

  public deleteByCode(code: string): Observable<number> {
    return this.http.delete<number>(this._url + 'avoirLivraison/' + code);
  }

  public findAll():Observable<Array<AvoirLivraison>>{
    return this.http.get<Array<AvoirLivraison>>(this._url);
  }
  constructor(private http: HttpClient) { }

  get avoirLivraison(): AvoirLivraison {
    if (this._avoirLivraison== null)
    {
      return this._avoirLivraison=new AvoirLivraison();
    }
    return this._avoirLivraison;
  }

  set avoirLivraison(value: AvoirLivraison) {
    this._avoirLivraison = value;
  }

  get avoirLivraisons(): Array<AvoirLivraison> {
    if (this._avoirLivraison== null)
    {
      return this._avoirLivraisons=new Array<AvoirLivraison>();
    }
    return this._avoirLivraisons;
  }

  set avoirLivraisons(value: Array<AvoirLivraison>) {
    this._avoirLivraisons = value;
  }

}
