import {Injectable, OnInit} from '@angular/core';
import {Vente} from "../../model/vente/vente.model";
import {VenteProduit} from "../../model/venteProduit/vente-produit.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VenteProduitService implements OnInit {
  private _venteProduit!: VenteProduit;
  private _venteProduits!: Array<VenteProduit>;
  private url = "http://localhost:8033/GestionCommertiale/VenteProduit";

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {
  }

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.venteProduit);
  }

  public findall(): Observable<Array<VenteProduit>> {
    return this.http.get<Array<VenteProduit>>(this.url);
  }

  get venteProduit(): VenteProduit {
    if (this._venteProduit == null) {
      return this._venteProduit = new VenteProduit();
    }
    return this._venteProduit;
  }

  set venteProduit(value: VenteProduit) {
    this._venteProduit = value;
  }

  get venteProduits(): Array<VenteProduit> {
    if (this._venteProduits == null) {
      return this._venteProduits = new Array<VenteProduit>;
    }

    return this._venteProduits;
  }

  set venteProduits(value: Array<VenteProduit>) {
    this._venteProduits = value;
  }
}
