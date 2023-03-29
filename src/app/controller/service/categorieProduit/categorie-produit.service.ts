import {Injectable, OnInit} from '@angular/core';
import {CategorieProduit} from "../../model/categorieProduit/categorie-produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../model/produit/produit";


@Injectable({
  providedIn: 'root'
})
export class CategorieProduitService implements OnInit {
  private _categorieProduit!: CategorieProduit;
  private _categorieProduits!: Array<CategorieProduit>;

  private url = "http://localhost:8033/GestionCommertiale/CategorieProduit";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.categorieProduit);
  }

  public findall(): Observable<Array<CategorieProduit>> {
    return this.http.get<Array<CategorieProduit>>(this.url);
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
}
