import {Component, OnInit} from '@angular/core';
import {Livraison} from "../../../controller/model/livraison/livraison.model";
import {LivraisonService} from "../../../controller/service/livraison/livraison.service";
import {Client} from "../../../controller/model/client/client.model";

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


  public findAll(): void{
    this.livraisonService.findAll().subscribe(data => this.livraisons = data);
  }
  public deleteByRef(livraison: Livraison, index:number):void {
    console.log('haaa ref' + livraison.ref);
    this.livraisonService.deleteByRef(livraison.ref.toString()).subscribe(data =>{
      if (data > 0) {
        this.livraisons.splice(index, 1);
      } else {
        alert('Dele Error');
      }
    });
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
