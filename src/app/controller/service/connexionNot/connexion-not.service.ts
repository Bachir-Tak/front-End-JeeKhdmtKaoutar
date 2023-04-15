import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {ConnexionService} from "../connexion/connexion.service";

@Injectable({
  providedIn: 'root'
})
export class ConnexionNotService implements CanActivate{
  constructor(private connexion:ConnexionService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !this.connexion.connex();
  }
}
