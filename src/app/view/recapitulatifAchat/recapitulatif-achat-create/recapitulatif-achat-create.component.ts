import {Component, OnInit} from '@angular/core';
import {RecapitulatifAchat} from "../../../controller/model/recapitulatifAchat/recapitulatifAchat.model";
import {RecapitulatifService} from "../../../controller/service/recapitulatifAchat/recapitulatifAchat.service";


@Component({
  selector: 'app-recapitulatif-create',
  templateUrl: 'recapitulatif-achat-create.component.html',
  styleUrls: ['./recapitulatif-achat-create.component.css']
})
export class RecapitulatifAchatCreateComponent implements OnInit{

  ngOnInit(): void {
  }

  public save(): void{
    this.recapitulatifAchatService.save().subscribe(
      data => {
        if (data == null) {
          alert('failure : code exist')
        }else{
          //this.recapitulatif = null;
          alert('success : recapitulatifAchat sav')
        }
      }
    );
  }
  constructor(private recapitulatifAchatService: RecapitulatifService) {
  }
  get recapitulatifAchat(): RecapitulatifAchat {
    return this.recapitulatifAchatService.recapitulatifAchat;
  }

  set recapitulatifAchat(value: RecapitulatifAchat) {
    this.recapitulatifAchatService.recapitulatifAchat = value;
  }

  get recapitulatifAchats(): Array<RecapitulatifAchat> {
    return this.recapitulatifAchatService.recapitulatifAchats;
  }

  set recapitulatifAchats(value: Array<RecapitulatifAchat>) {
    this.recapitulatifAchatService.recapitulatifAchats = value;
  }

}
