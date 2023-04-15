import {Component, Input, OnInit} from '@angular/core';
import {Reception} from "../../../controller/model/reception/reception";
import {ReceptionService} from "../../../controller/service/reception/reception.service";
import {ReceptionProduit} from "../../../controller/model/receptionProduit/reception-produitl";
import {Produit} from "../../../controller/model/produit/produit";
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {MagasinService} from "../../../controller/service/magasin/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";


@Component({
  selector: 'app-reception-create',
  templateUrl: './reception-create.component.html',
  styleUrls: ['./reception-create.component.css']
})
export class ReceptionCreateComponent implements OnInit {


  constructor(private receptionService: ReceptionService, private magasinService: MagasinService, private produitService: ProduitService) {
  }

  magasins!: Array<Magasin>;
  listProduit!: Array<Produit>;


  ngOnInit() {

    this.magasinService.findAll().subscribe(data => {
      this.magasins = data
    });
    this.produitService.findAll().subscribe(data => {
      this.listProduit = data
    });

  }

  public save(): void {

    this.receptionService.save(this.reception).subscribe(data => {
      alert(data);
      this.reception = new Reception();
      this.receptionProduit = new ReceptionProduit()
    })
  }

  get reception(): Reception {

    return this.receptionService.reception;
  }

  set reception(value: Reception) {
    this.receptionService.reception = value;
  }

  get receptionProduit(): ReceptionProduit {
    return this.receptionService.receptionProduit;
  }

  set receptionProduit(value: ReceptionProduit) {
    this.receptionService.receptionProduit = value;
  }

  public addReceptionProduit() {
    this.receptionService.addReceptionProduit();
    this.receptionProduit = new ReceptionProduit();
  }
}
