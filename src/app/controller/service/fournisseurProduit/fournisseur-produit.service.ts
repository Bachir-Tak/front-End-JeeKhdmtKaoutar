import {Injectable, OnInit} from '@angular/core';
import {FournisseurProduit} from "../../model/fournisseurProduit/fournisseur-produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../model/produit/produit";

@Injectable({
  providedIn: 'root'
})
export class FournisseurProduitService implements OnInit {
  private _fournisseurProduit!: FournisseurProduit;
  private _fournisseurProduits!: Array<FournisseurProduit>
  private url = "http://localhost:8033/GestionCommertiale/FournisseurProduit";


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.fournisseurProduit);
  }

  public findall(): Observable<Array<FournisseurProduit>> {
    return this.http.get<Array<FournisseurProduit>>(this.url);
  }

  get fournisseurProduit(): FournisseurProduit {
    if (this._fournisseurProduit == null) {
      return this._fournisseurProduit = new FournisseurProduit();
    }
    return this._fournisseurProduit;
  }

  set fournisseurProduit(value: FournisseurProduit) {
    this._fournisseurProduit = value;
  }

  get fournisseurProduits(): Array<FournisseurProduit> {
    if (this._fournisseurProduits == null) {
      return this._fournisseurProduits = new Array<FournisseurProduit>();
    }
    return this._fournisseurProduits;
  }

  set fournisseurProduits(value: Array<FournisseurProduit>) {
    this._fournisseurProduits = value;
  }
}
