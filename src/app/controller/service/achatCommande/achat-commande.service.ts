import { Injectable } from '@angular/core';
import {AchatCommande} from "../../model/achatCommande/achat-commande";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AchatCommandeService {

  private _achatCommande !: AchatCommande;

  private _achatCommandes !: Array<AchatCommande>;

  private url ="http://localhost:8033/GestionCommertiale/AchatCommande";

  constructor(private http:HttpClient) {}

  get achatCommande(): AchatCommande {
    if(this._achatCommande == null){
      return this._achatCommande = new AchatCommande();
    }
    return this._achatCommande;
  }

  set achatCommande(value: AchatCommande) {
    this._achatCommande = value;
  }

  get achatCommandes(): Array<AchatCommande> {
    if(this._achatCommandes == null){
      return this._achatCommandes = new Array<AchatCommande>();
    }
    return this._achatCommandes;
  }

  set achatCommandes(value: Array<AchatCommande>) {
    this._achatCommandes = value;
  }
  public  save (achatCommande: AchatCommande):Observable<number>{
    return this.http.post<number>(this.url, this.achatCommande);
  }
  public  findAll(): Observable<Array<AchatCommande>>{
    return this.http.get<Array<AchatCommande>>(this.url);
  }
}
