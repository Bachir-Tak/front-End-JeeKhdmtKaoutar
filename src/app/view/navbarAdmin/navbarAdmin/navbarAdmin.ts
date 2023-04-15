import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbarAdmin',
  templateUrl: './navbarAdmin.html',
  styleUrls: ['./navbarAdmin.css']
})
export class NavbarAdmin implements OnInit{
  connexion=this.appComponent.user;


  connected=this.appComponent.connected;
  // @ts-ignore
  nom=this.connected[1]["client"]["prenom"];

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
