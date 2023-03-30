import {Component, OnInit} from '@angular/core';
import {VilleService} from "../../../controller/service/ville/ville.service";
import {Ville} from "../../../controller/model/ville/ville";

@Component({
  selector: 'app-ville-list',
  templateUrl: './ville-list.component.html',
  styleUrls: ['./ville-list.component.css']
})
export class VilleListComponent  implements OnInit{

  constructor(private villeService: VilleService) {
  }
  ngOnInit(): void {
  }

  get ville(): Ville {
    return this.villeService.ville;
  }

  set ville(value: Ville) {
    this.villeService.ville = value;
  }

  get villes(): Array<Ville> {
    return this.villeService.villes;
  }

  set villes(value: Array<Ville>) {
    this.villeService.villes = value;
  }
  public findAll():void{
    this.villeService.findAll().subscribe(
      data => this.villes = data
    );
  }
}
