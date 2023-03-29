import {Injectable, OnInit} from '@angular/core';
import {Vente} from "../../model/vente/vente.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "../../model/produit/produit";

@Injectable({
  providedIn: 'root'
})
export class VenteService implements OnInit {
  private _vente!: Vente;
  private _ventes!: Array<Vente>;
  private url = "http://localhost:8033/GestionCommertiale/Vente";

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.vente);
  }

  public findall(): Observable<Array<Vente>> {
    return this.http.get<Array<Vente>>(this.url);
  }

  get vente(): Vente {
    if (this._vente == null) {
      return this._vente = new Vente();
    }
    return this._vente;
  }

  set vente(value: Vente) {
    this._vente = value;
  }

  get ventes(): Array<Vente> {
    if (this._ventes == null) {
      return this._ventes = new Array<Vente>();
    }
    return this._ventes;
  }

  set ventes(value: Array<Vente>) {
    this._ventes = value;
  }
}
