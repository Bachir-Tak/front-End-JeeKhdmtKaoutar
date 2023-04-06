import {Injectable, OnInit} from '@angular/core';
import {ProduitAjouter} from "../../../controller/model/produitAjouter/produit-ajouter.model";
import {Produit} from "../../../controller/model/produit/produit";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitAjouterService implements OnInit{
  private _produitAjouter!: ProduitAjouter;
  private _produitAjouters!:Array<ProduitAjouter>;
  private url = "http://localhost:8033/GestionCommertiale/ProduitAjouter";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  public save(): Observable<number> {
    return this.http.post<number>(this.url, this._produitAjouter);
  }
  public findall(): Observable<Array<ProduitAjouter>> {
    return this.http.get<Array<ProduitAjouter>>(this.url);
  }

  get produitAjouter(): ProduitAjouter {
    if (this._produitAjouter == null) {
      return this._produitAjouter = new Produit();
    }
    return this._produitAjouter;
  }

  set produitAjouter(value: ProduitAjouter) {
    this._produitAjouter = value;
  }

  get produitAjouters(): Array<ProduitAjouter> {
    if (this._produitAjouters == null) {
      return this._produitAjouters = new Array<Produit>();
    }
    return this._produitAjouters;
  }

  set produitAjouters(value: Array<ProduitAjouter>) {
    this._produitAjouters = value;
  }
}
