import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../controller/service/client/client.service";
import {Client} from "../../../controller/model/client/client";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit{
  constructor(private clientService: ClientService) {
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.clientService.save().subscribe(data =>{
      if(data != null){
        alert('SAVE SUCCESS');
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
