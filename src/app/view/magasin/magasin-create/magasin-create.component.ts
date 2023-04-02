import {Component, OnInit} from '@angular/core';
import {MagasinService} from "../../../controller/service/magasin/magasin.service";
import {Magasin} from "../../../controller/model/magasin/magasin.model";

@Component({
  selector: 'app-magasin-create',
  templateUrl: './magasin-create.component.html',
  styleUrls: ['./magasin-create.component.css']
})
export class MagasinCreateComponent implements OnInit{


  constructor(private magasinService:MagasinService) {
  }
  public save():void{
    this.magasinService.save(this.magasin).subscribe(data=>{alert(data)})
  }
  ngOnInit(): void {
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
