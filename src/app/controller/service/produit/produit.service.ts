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

  private url = "http://localhost:8033/GestionCommertiale/Produit";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.produit);
  }

  public findall(): Observable<Array<Produit>> {
    return this.http.get<Array<Produit>>(this.url);
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
}
