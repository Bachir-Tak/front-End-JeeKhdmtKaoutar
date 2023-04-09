import { Injectable } from '@angular/core';
import {LivraisonCommande} from "../../model/livraisonCommande/livraison-commande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LivraisonCommandeService {
  private _livraisoncommande !: LivraisonCommande;
  private _livraisonscommandes !: Array<LivraisonCommande>;
  private _url ="http://localhost:8033/GestionCommerciale/LivraisonCommande";
  save():Observable<number>{
    return this.http.post<number>(this._url,this.livraisoncommande);
  }

  public deleteByCommandeRef(ref: string): Observable<number> {
    return this.http.delete<number>(this._url + 'livraisonCommande/' + ref);
  }

  public findAll():Observable<Array<LivraisonCommande>>{
    return this.http.get<Array<LivraisonCommande>>(this._url);
  }


  constructor(private http: HttpClient) { }

  get livraisoncommande(): LivraisonCommande {
    if (this._livraisoncommande== null)
    {
      return this._livraisoncommande=new LivraisonCommande();
    }
    return this._livraisoncommande;
  }

  set livraisoncommande(value: LivraisonCommande) {
    this._livraisoncommande = value;
  }

  get livraisonscommandes(): Array<LivraisonCommande> {
    if (this._livraisoncommande== null)
    {
      return this._livraisonscommandes=new Array<LivraisonCommande>();
    }
    return this._livraisonscommandes;
  }

  set livraisonscommandes(value: Array<LivraisonCommande>) {
    this._livraisonscommandes = value;
  }
}
