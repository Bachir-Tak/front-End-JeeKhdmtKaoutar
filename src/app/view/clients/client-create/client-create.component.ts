import {Component, OnInit} from '@angular/core';
import { Client } from 'src/app/controller/model/client/client.model';
import {ClientService} from "../../../controller/service/client/client.service";
import {AppComponent} from "../../../app.component";
import {CompteService} from "../../../controller/service/compte/compte.service";


@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit{
  constructor(private clientService: ClientService,private appComponent: AppComponent,private compteService:CompteService) {
  }
  goLogin():void{
    this.appComponent.signup=false;

  }
  ngOnInit(): void {
  }
  compte=this.compteService.compte;
  public save(): void{

    this.compteService.save(this.compte).subscribe(data =>{
      if(data != null){
        alert('SAVE SUCCESS');
        this.appComponent.signup=false;

      }else{
        alert('SAVE ERROR');
      }
    });
  }
  get client(): Client {
    return this.clientService.client;
  }

  set client(value: Client) {
    this.clientService.client = value;
  }

  get clients(): Array<Client> {
    return this.clientService.clients;
  }

  set clients(value: Array<Client>) {
    this.clientService.clients= value;
  }

}
