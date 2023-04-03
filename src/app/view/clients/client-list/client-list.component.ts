import {Component, OnInit} from '@angular/core';
import { Client } from 'src/app/controller/model/client/client.model';

import {ClientService} from "../../../controller/service/client/client.service";


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{

  constructor(private clientService: ClientService) {
  }
  ngOnInit(): void {
    this.findAll();
  }
  public findAll(): void{
    this.clientService.findAll().subscribe(data => this.clients = data);
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
  public deleteByCin(client: Client, index:number):void {
    console.log('haaa cin' + client.cin);
    this.clientService.deleteByCin(client.cin.toString()).subscribe(data => {
      if (data > 0) {
        this.clients.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }
}
