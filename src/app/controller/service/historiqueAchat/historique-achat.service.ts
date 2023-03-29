import { Injectable } from '@angular/core';
import {HistoriqueAchat} from "../../model/historiqueAchat/historique-achat";
import {HttpClient} from "@angular/common/http";
import {Compte} from "../../model/compte/compte";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HistoriqueAchatService {
  private _historiqueAchat !: HistoriqueAchat;
  private _historiqueAchats !: Array<HistoriqueAchat>;

  private url = "http://localhost:8033/GestionCommertiale/HistoriqueAchat";

  constructor(private http:HttpClient) { }

  get historiqueAchat(): HistoriqueAchat {
    if(this._historiqueAchat == null){
      return this._historiqueAchat = new HistoriqueAchat();
    }
    return this._historiqueAchat;
  }

  set historiqueAchat(value: HistoriqueAchat) {
    this._historiqueAchat = value;
  }

  get historiqueAchats(): Array<HistoriqueAchat> {
    if(this._historiqueAchats == null){
      return this._historiqueAchats = new Array<HistoriqueAchat>();
    }
    return this._historiqueAchats;
  }

  set historiqueAchats(value: Array<HistoriqueAchat>) {
    this._historiqueAchats = value;
  }
  public  save (historiqueAchat : HistoriqueAchat):Observable<number>{
    return this.http.post<number>(this.url, this.historiqueAchat);
  }
  public  findAll(): Observable<Array<HistoriqueAchat>>{
    return this.http.get<Array<HistoriqueAchat>>(this.url);
  }
}
