import {Component, OnInit} from '@angular/core';
import {StockService} from "../../../controller/service/stock/stock.service";
import {Stock} from "../../../controller/model/stock/stock.model";

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit{
  constructor(private stockService:StockService) {
  }
  ngOnInit() {
    this.findAll();
  }

  public save():void {
    this.stockService.save(this.stock).subscribe(data=>alert(data))
  }
  public findAll(): void{
    this.stockService.findAll().subscribe(data => this.stocks = data);
  }
  get stock(): Stock {

    return this.stockService.stock;
  }

  set stock(value: Stock) {
    this.stockService.stock = value;
  }

  get stocks(): Array<Stock> {
    return this.stockService.stocks;
  }

  set stocks(value: Array<Stock>) {
    this.stockService.stocks = value;
  }

}
