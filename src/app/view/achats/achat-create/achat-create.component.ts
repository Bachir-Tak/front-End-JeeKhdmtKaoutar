import {Component, OnInit} from '@angular/core';
import {AchatService} from "../../../controller/service/achat/achat.service";
import {Achat} from "../../../controller/model/achat/achat";

@Component({
  selector: 'app-achat-create',
  templateUrl: './achat-create.component.html',
  styleUrls: ['./achat-create.component.css']
})
export class AchatCreateComponent  implements OnInit{

  constructor(private achatService: AchatService) {
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.achatService.save().subscribe(data =>{
      if(data != null){
        alert('SAVE SUCCESS');
      }else{
        alert('SAVE ERROR');
      }
    });
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

}
