import {Component, OnInit} from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";

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
