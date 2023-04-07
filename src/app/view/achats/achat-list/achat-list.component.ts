import {Component, OnInit} from '@angular/core';
import {AchatService} from "../../../controller/service/achat/achat.service";
import {Achat} from "../../../controller/model/achat/achat";

@Component({
  selector: 'app-achat-list',
  templateUrl: './achat-list.component.html',
  styleUrls: ['./achat-list.component.css']
})
export class AchatListComponent implements OnInit{
  constructor(private achatService:AchatService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.achatService.findAll().subscribe(data => this.achats = data);
  }
  get achat(): Achat {
    return this.achatService.achat;
  }

  set achat(value: Achat) {
    this.achatService.achat = value;
  }

  get achats(): Array<Achat> {
    return this.achatService.achats;
  }

  set achats(value: Array<Achat>) {
    this.achatService.achats = value;
  }
  public deleteByCode(achat: Achat, index:number):void {
    console.log('haaa cin' + achat.code);
    this.achatService.deleteByCode(achat.code.toString()).subscribe(data => {
      if (data > 0) {
        this.achats.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }
}
