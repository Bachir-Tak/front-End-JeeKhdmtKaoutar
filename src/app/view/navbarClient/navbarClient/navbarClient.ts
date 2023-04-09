import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";

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

  // @ts-ignore
  client=this.connected[1]['client'];

  signout():void{
    this.appComponent.connected[0]=false;
    this.appComponent.connected[2]=false;
    this.router.navigate(["/accueil"])


  }
  constructor(private appComponent:AppComponent, private router:Router) {
  }

  ngOnInit(): void {

  }

}
