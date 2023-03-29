import {Injectable} from '@angular/core';
import {Fournisseur} from '../../model/fournisseur/fournisseur.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoutnisseurService {
  private _fournisseur!: Fournisseur;
  private _fournisseurs!: Array<Fournisseur>;
  private url = "http://localhost:8033/GestionCommertiale/Fournisseur";

  public save(): Observable<number> {
    return this.http.post<number>(this.url, this.fournisseur);
  }

  public findall(): Observable<Array<Fournisseur>> {
    return this.http.get<Array<Fournisseur>>(this.url);
  }

  constructor(private http: HttpClient) {
  }

  get fournisseur(): Fournisseur {
    if (this._fournisseur == null) {
      return this._fournisseur = new Fournisseur();
    }
    return this._fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this._fournisseur = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    if (this._fournisseurs == null) {
      return this._fournisseurs = new Array<Fournisseur>();
    }
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }
}
