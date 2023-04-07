import {Component, Input, OnInit} from '@angular/core';
import {Reception} from "../../../controller/model/reception/reception";
import {ReceptionService} from "../../../controller/service/reception/reception.service";
import {StockListComponent} from "../../stock/stock-list/stock-list.component";
import {Stock} from "../../../controller/model/stock/stock.model";


@Component({
  selector: 'app-reception-create',
  templateUrl: './reception-create.component.html',
  styleUrls: ['./reception-create.component.css']
})
export class ReceptionCreateComponent implements OnInit{
  content='<label for="produit" class="form-label fw-semibold">Produit</label> <select name="produit" id="produit"> <option *ngFor="let i of demande.demandeProduits" value={{i.produit}}></option> </select> <div class="form-group" class="demandeProduits"> <label for="quantite" class="form-label fw-semibold">Quantite</label> <input id="quantite" type="number" class="form-control"> </div>';
  public contentAdd():void{
    this.content+='<label for="produit" class="form-label fw-semibold">Produit</label> <select name="produit" id="produit"> <option *ngFor="let i of demande.demandeProduits" value={{i.produit}}></option> </select> <div class="form-group" class="demandeProduits"> <label for="quantite" class="form-label fw-semibold">Quantite</label> <input id="quantite" type="number" class="form-control"> </div>';
  }
  stockListComponent!:StockListComponent;
  stocks!:Stock[];
  public findStocks():void{
    this.stockListComponent.findAll()
    this.stocks=this.stockListComponent.stocks;
  }

  constructor(private receptionService:ReceptionService) {
  }
  ngOnInit() {
  }

  public save():void {
    this.receptionService.save(this.reception).subscribe(data=>alert(data))
  }

  get reception(): Reception {

    return this.receptionService.reception;
  }

  set reception(value: Reception) {
    this.receptionService.reception = value;
  }

  get receptions(): Array<Reception> {
    return this.receptionService.receptions;
  }

  set receptions(value: Array<Reception>) {
    this.receptionService.receptions = value;
  }
}
