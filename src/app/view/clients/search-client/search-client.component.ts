import {Component, OnInit} from '@angular/core';
import {Client} from "../../../controller/model/client/client.model";
import {ClientService} from "../../../controller/service/client/client.service";

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent  implements OnInit{
  constructor(private clientService: ClientService) {
  }
  ngOnInit(): void {
  }
  public search(): void{
    this.clientService.findByCin(this.client.cin).subscribe(data => this.client = data);
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
