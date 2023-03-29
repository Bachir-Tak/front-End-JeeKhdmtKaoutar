import {Component, OnInit} from '@angular/core';
import {LivraisonService} from "../../../controller/service/livraison/livraison.service";
import {AvoirLivraisonService} from "../../../controller/service/avoirLivraison/avoir-livraison.service";
import {AvoirLivraison} from "../../../controller/model/avoirLivraison/avoir-livraison.model";

@Component({
  selector: 'app-avoir-livraison-list',
  templateUrl: './avoir-livraison-list.component.html',
  styleUrls: ['./avoir-livraison-list.component.css']
})
export class AvoirLivraisonListComponent implements OnInit{
  constructor(private avoirLivraisonService: AvoirLivraisonService) {

  }
  ngOnInit(): void {
    this.findAll();
  }
  public deleteByCode(avoirLivraison:AvoirLivraison, index:number):void {
    this.avoirLivraisonService.deleteByCode(avoirLivraison.code).subscribe(data => {
      if (data > 0) {
        this.avoirLivraisons.splice(index, 1);
      } else {
        alert('Del Error');
      }
    });
  }

  public findAll():void{
    this.avoirLivraisonService.findAll().subscribe(data=> this.avoirLivraisons = data);
  }

  get avoirLivraison(): AvoirLivraison {
    return this.avoirLivraisonService.avoirLivraison;
  }

  set avoirLivraison(value: AvoirLivraison) {
    this.avoirLivraisonService.avoirLivraison = value;
  }

  get avoirLivraisons(): Array<AvoirLivraison> {
    return this.avoirLivraisonService.avoirLivraisons;
  }

  set avoirLivraisons(value: Array<AvoirLivraison>) {
    this.avoirLivraisonService.avoirLivraisons = value;
  }


}
