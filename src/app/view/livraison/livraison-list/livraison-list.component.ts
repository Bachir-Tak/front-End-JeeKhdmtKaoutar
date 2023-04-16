import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../../controller/model/livraison/livraison.model";
import {LivraisonService} from "../../../controller/service/livraison/livraison.service";

@Component({
  selector: 'app-livraison-list',
  templateUrl: './livraison-list.component.html',
  styleUrls: ['./livraison-list.component.css']
})
export class LivraisonListComponent implements OnInit{
  constructor(private livraisonService: LivraisonService) {

  }
  ngOnInit(): void {
    this.findAll();
  }

  public deleteByRef(livraison:Livraison, index:number):void {
    this.livraisonService.deleteByRef(livraison.ref.toString()).subscribe(data => {
      if (data > 0) {
        this.livraisons.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }

  public findAll():void{
    this.livraisonService.findAll().subscribe(data => {this.livraisons=data});
  }

  get livraison(): Livraison {
    return this.livraisonService.livraison;
  }

  set livraison(value: Livraison) {
    this.livraisonService.livraison = value;
  }

  get livraisons(): Array<Livraison> {
    return this.livraisonService.livraisons;
  }

  set livraisons(value: Array<Livraison>) {
    this.livraisonService.livraisons = value;
  }

}
