import {Injectable, OnInit} from '@angular/core';
import {CategorieProduit} from "../../model/categorieProduit/categorie-produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../model/client/client.model";


@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService implements OnInit {
  private _categorieProduit!: CategorieProduit;
  private _categorieProduits!: Array<CategorieProduit>;

  private _url = "http://localhost:8033/GestionCommerciale/CategorieProduit/";

  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
  }
  public findByCode(code:string):Observable<CategorieProduit>{
    return this._http.get<CategorieProduit>(this._url+'code/'+ code);
  }
  public save(categorieProduit : CategorieProduit): Observable<number> {
    return this._http.post<number>(this.url, categorieProduit);
  }

  public findAll(): Observable<Array<CategorieProduit>> {
    return this._http.get<Array<CategorieProduit>>(this.url);
  }

  get categorieProduit(): CategorieProduit {
    if (this._categorieProduit == null) {
      return this._categorieProduit = new CategorieProduit();
    }
    return this._categorieProduit;
  }

  set categorieProduit(value: CategorieProduit) {
    this._categorieProduit = value;
  }

  get categorieProduits(): Array<CategorieProduit> {
    if (this._categorieProduits == null) {
      return this._categorieProduits = new Array<CategorieProduit>();
    }
    return this._categorieProduits;
  }

  set categorieProduits(value: Array<CategorieProduit>) {
    this._categorieProduits = value;
  }
  public deleteByCode(code:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'code/'+ code);
    return this._http.delete<number>(this._url+ 'code/' + code);
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
