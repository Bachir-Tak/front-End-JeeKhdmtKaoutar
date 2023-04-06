import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../../model/produit/produit";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ProduitService implements OnInit {
  private _produit!: Produit;
  private _produits!: Array<Produit>;

  private _url = "http://localhost:8033/GestionCommerciale/Produit/";

  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(produit : Produit): Observable<number> {
    return this._http.post<number>(this.url, produit);
  }

  public findAll(): Observable<Array<Produit>> {
    return this._http.get<Array<Produit>>(this.url);
  }
  public deleteByRef(ref:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'ref/'+ ref);
    return this._http.delete<number>(this._url+ 'ref/' + ref);
  }

  get produit(): Produit {
    if (this._produit == null) {
      return this._produit = new Produit();
    }
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get produits(): Array<Produit> {
    if (this._produits == null) {
      return this._produits = new Array<Produit>();
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
