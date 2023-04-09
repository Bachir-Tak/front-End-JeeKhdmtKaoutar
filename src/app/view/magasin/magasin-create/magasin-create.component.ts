import {Component, OnInit} from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";
import {StockService} from "../../../controller/service/stock/stock.service";
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {Produit} from "../../../controller/model/produit/produit";
import {Stock} from "../../../controller/model/stock/stock.model";

@Component({
  selector: 'app-magasin-create',
  templateUrl: './magasin-create.component.html',
  styleUrls: ['./magasin-create.component.css']
})
export class MagasinCreateComponent implements OnInit{

  constructor(private magasinService:MagasinService, private produitService:ProduitService) {
  }
  listProduit!: Array<Produit>;

  ngOnInit(): void {
    this.produitService.findAll().subscribe(data=>{this.listProduit=data;});
  }
  public save():void{
    this.addStock();
    this.magasinService.save(this.magasin).subscribe(data=>{alert(data);this.magasin=new Magasin();this.stock=new Stock();})

  }
  public addStock(){
    this.magasinService.addStock();
  }


  get magasin(): Magasin {
    return this.magasinService.magasin;
  }

  set magasin(value: Magasin) {
    this.magasinService.magasin = value;
  }

  get stock(): Stock {
    return this.magasinService.stock;
  }

  set stock(value: Stock) {
    this.magasinService.stock = value;
  }

}
