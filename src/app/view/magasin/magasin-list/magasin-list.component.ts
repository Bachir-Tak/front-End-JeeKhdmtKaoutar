import {Component, OnInit} from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin";
import {Fournisseur} from "../../../controller/model/fournisseur/fournisseur.model";

@Component({
  selector: 'app-magasin-list',
  templateUrl: './magasin-list.component.html',
  styleUrls: ['./magasin-list.component.css']
})
export class MagasinListComponent implements OnInit{
  constructor(private magasinService:MagasinService) {
  }
  ngOnInit() {
    this.findAll();
  }

public save():void {
    this.magasinService.save(this.magasin).subscribe(data=>alert(data))
  }
public findAll(): void{
    this.magasinService.findAll().subscribe(data => this.magasins = data);
  }
  public deleteByCode(magasin: Magasin, index: number): void {
    console.log('haaa code' + magasin.code);
    this.magasinService.deleteByCode(magasin.code.toString()).subscribe(data => {
      if (data > 0) {
        this.magasins.splice(index, 1);
      } else {
        alert('Del Error');
      }
    });
  }
  get magasin(): Magasin {

    return this.magasinService.magasin;
  }

  set magasin(value: Magasin) {
    this.magasinService.magasin = value;
  }

  get magasins(): Array<Magasin> {
    return this.magasinService.magasins;
  }

  set magasins(value: Array<Magasin>) {
    this.magasinService.magasins = value;
  }
}
