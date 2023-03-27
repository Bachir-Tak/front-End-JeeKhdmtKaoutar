import {Component, OnInit} from '@angular/core';
import {HistoriqueAchatService} from "../../../controller/service/historiqueAchat/historique-achat.service";
import {HistoriqueAchat} from "../../../controller/model/historiqueAchat/historique-achat";

@Component({
  selector: 'app-historique-achat-list',
  templateUrl: './historique-achat-list.component.html',
  styleUrls: ['./historique-achat-list.component.css']
})
export class HistoriqueAchatListComponent implements OnInit{
  constructor(private historiqueAchatService : HistoriqueAchatService) {
  }
  ngOnInit(): void {
  }
  public findAll(): void{
    this.historiqueAchatService.findAll().subscribe(data => this.historiqueAchats = data);
  }
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
