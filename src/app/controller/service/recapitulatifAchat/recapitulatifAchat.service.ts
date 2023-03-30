import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RecapitulatifAchat} from "../../model/recapitulatifAchat/recapitulatifAchat.model";

@Injectable({
  providedIn: 'root'
})
export class RecapitulatifService {
  private _recapitulatifAchat!: RecapitulatifAchat;
  private _recapitulatifAchats!: Array<RecapitulatifAchat>;
  private _url = "http://localhost:8033/GestionCommertiale/RecapitulatifAchat/"

  constructor(private _http:HttpClient) { }
  public findAll():Observable<Array<RecapitulatifAchat>>{
    return this._http.get<Array<RecapitulatifAchat>>(this.url);
  }
  public save():Observable<RecapitulatifAchat>{
    return this._http.post<RecapitulatifAchat>(this.url , this.recapitulatifAchat);
  }
  public  deleteByCode(code: string): Observable<number>{
    return this._http.delete<number>(this.url+'code/'+code);
  }

  get recapitulatifAchat(): RecapitulatifAchat {
    return this._recapitulatifAchat;
  }

  set recapitulatifAchat(value: RecapitulatifAchat) {
    this._recapitulatifAchat = value;
  }

  get recapitulatifAchats(): Array<RecapitulatifAchat> {
    return this._recapitulatifAchats;
  }

  set recapitulatifAchats(value: Array<RecapitulatifAchat>) {
    this._recapitulatifAchats = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
