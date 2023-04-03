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

  private _url = "http://localhost:8033/GestionCommertiale/HistoriqueAchat";

  constructor(private _http:HttpClient) { }

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
  public  save ():Observable<HistoriqueAchat>{
    return this._http.post<HistoriqueAchat>(this._url, this.historiqueAchat);
  }
  public  findAll(): Observable<Array<HistoriqueAchat>>{
    return this._http.get<Array<HistoriqueAchat>>(this._url);
  }
  public deleteByRef(ref:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'ref/'+ ref);
    return this._http.delete<number>(this._url+ 'ref/' + ref);
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
