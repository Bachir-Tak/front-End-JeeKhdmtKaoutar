import {Injectable} from '@angular/core';
import {FournisseurProduit} from "../../model/fournisseurProduit/fournisseur-produit.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FournisseurProduitService {

  private _fournisseurProduit !: FournisseurProduit;

  private _fournisseurProduits !: Array<FournisseurProduit>;

  private _url ="http://localhost:8033/GestionCommerciale/FournisseurProduit";

  constructor(private _http:HttpClient) { }

  get fournisseurProduits(): Array<FournisseurProduit> {
    if(this._fournisseurProduits == null){
      return this._fournisseurProduits = new Array<FournisseurProduit>() ;
    }
    return this._fournisseurProduits;
  }

  set fournisseurProduits(value: Array<FournisseurProduit>) {
    this._fournisseurProduits = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get fournisseurProduit(): FournisseurProduit {
    if(this._fournisseurProduit == null){
      return this._fournisseurProduit = new FournisseurProduit();
    }
    return this._fournisseurProduit;
  }

  set fournisseurProduit(value: FournisseurProduit) {
    this._fournisseurProduit = value;
  }
}
