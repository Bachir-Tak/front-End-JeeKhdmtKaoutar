import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {CompteService} from "../compte/compte.service";

@Injectable({
  providedIn: 'root'
})
export class ConnexionService implements CanActivate{
  admin!:boolean
  connected=[false,this.compteService.compte,this.admin]

  constructor(private compteService:CompteService,private router:Router) { }
  connex():boolean{
    if (this.connected[2]==undefined){
      this.router.navigate(["/accueil"]);
    };
    return <boolean>this.connected[2];
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.connex();
  }
}
