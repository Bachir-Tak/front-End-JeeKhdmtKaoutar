import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Stock} from "../../model/stock/stock.model";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private _stock !: Stock
  private _stocks !: Array<Stock>;

  private _url ="http://localhost:8033/GestionCommertiale/Stock/";

  save (stock:Stock):Observable<Stock>{
    return this.http.post<Stock>(this._url,stock);
  }

  public findAll(): Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(this._url);
  }
  constructor(private  http: HttpClient) { }


  get stock(): Stock {
    if (this._stock== null)
    {
      return this._stock=new Stock();
    }
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
