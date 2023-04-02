import {Component, OnInit} from '@angular/core';
import {HistoriqueAchatService} from "../../../controller/service/historiqueAchat/historique-achat.service";
import {HistoriqueAchat} from "../../../controller/model/historiqueAchat/historique-achat";


@Component({
  selector: 'app-historique-achat-create',
  templateUrl: './historique-achat-create.component.html',
  styleUrls: ['./historique-achat-create.component.css']
})
export class HistoriqueAchatCreateComponent implements OnInit {

  constructor(private historiqueAchatService: HistoriqueAchatService) {
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.historiqueAchatService.save(this.historiqueAchat).subscribe( );}



   get historiqueAchat(): HistoriqueAchat {
    return this.historiqueAchatService.historiqueAchat;
   }

  set historiqueAchat(value: HistoriqueAchat) {
    this.historiqueAchatService.historiqueAchat = value;
  }

  get historiqueAchats(): Array<HistoriqueAchat> {
    return this.historiqueAchatService.historiqueAchats;
  }

  set historiqueAchats(value: Array<HistoriqueAchat>) {
    this.historiqueAchatService.historiqueAchats = value;
  }
}
