import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-navbarClient',
  templateUrl: './navbarClient.html',
  styleUrls: ['./navbarClient.css']
})
export class NavbarClient implements OnInit{
  connexion=this.appComponent.user;


  connected=this.appComponent.connected;
  // @ts-ignore
  nom=this.connected[1]["client"]["prenom"];

  signout():void{
    this.appComponent.connected[0]=false;
  }
  constructor(private appComponent:AppComponent) {
  }

  ngOnInit(): void {

  }

}
