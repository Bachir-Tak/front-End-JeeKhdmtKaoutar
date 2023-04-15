import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stock} from "../../model/stock/stock.model";
import {ProduitService} from "../produit/produit.service";
import {MagasinService} from "../magasin/magasin.service";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private _stock !: Stock
  private _stocks !: Array<Stock>;

  private _url ="http://localhost:8033/GestionCommerciale/Stock/";

   public save (stock:Stock):Observable<Stock>{
    return this.http.post<Stock>(this._url,stock);
  }

  public findAll(): Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(this._url);
  }
  public deleteByMagasinCode(code:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'code/'+ code);
    return this.http.delete<number>(this._url+ 'code/' + code);
  }
  constructor(private  http: HttpClient,private produitService:ProduitService,private magasinService:MagasinService) { }




  get stock(): Stock {
    if (this._stock== null)
    {
      this._stock=new Stock();
      this._stock.magasin=this.magasinService.magasin;
      this._stock.produit=this.produitService.produit;
      return this._stock;    }
    return this._stock;
  }

  set stock(value: Stock) {
    this._stock = value;
  }

  get stocks(): Array<Stock> {
    if (this._stocks== null)
    {
      this._stocks=new Array<Stock>();
    }
    return this._stocks;
  }

  set stocks(value: Array<Stock>) {
    this._stocks = value;
  }
}
