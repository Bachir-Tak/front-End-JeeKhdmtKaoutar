import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../../model/fournisseur/fournisseur.model";
import {Observable} from "rxjs";
import {CategorieProduit} from "../../model/categorieProduit/categorie-produit";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService  {

  private _fournisseur !: Fournisseur;
  private _fournisseurs !: Array<Fournisseur>;

  private _url ="http://localhost:8033/GestionCommerciale/Fournisseur/";

  constructor(private _http:HttpClient) { }

  get fournisseur(): Fournisseur {
    if(this._fournisseur == null){
      return  this._fournisseur = new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    if(this._fournisseurs == null){
      return  this._fournisseurs = new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
  public  save (fournisseur : Fournisseur):Observable<number>{
    return this._http.post<number>(this.url, fournisseur);

  }
  public  findAll(): Observable<Array<Fournisseur>>{
    return this._http.get<Array<Fournisseur>>(this.url);
  }
  public findByCode(code:string):Observable<Fournisseur>{
    return this._http.get<Fournisseur>(this._url+'code/'+ code);
  }

  public deleteByCode(code:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'code/'+ code);
    return this._http.delete<number>(this._url+ 'code/' + code);
  }


}
