import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-which',
  templateUrl: './which.component.html',
  styleUrls: ['./which.component.css']
})
export class WhichComponent implements OnInit{
  connexion=this.appComponent.user;


  connected=this.appComponent.connected
  constructor(private appComponent:AppComponent) {
  }

  ngOnInit(): void {

  }

}
