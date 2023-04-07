import {Component, OnInit} from '@angular/core';
import {LivraisonService} from "../../../controller/service/livraison/livraison.service";
import {Livraison} from "../../../controller/model/livraison/livraison.model";



@Component({
  selector: 'app-livraison-create',
  templateUrl: './livraison-create.component.html',
  styleUrls: ['./livraison-create.component.css']
})
export class LivraisonCreateComponent implements OnInit {

  constructor(private livraisonService: LivraisonService) {

  }

  public save(): void {
    this.livraisonService.save(this.livraison).subscribe(data => {
        if (data < 0) {
        // this.livraisons.push({...this.livraison});
        // this.livraisonService.livraison == null;
          alert('Save Success');
        } else {
          alert('Save Error ::: Ref Exist');
        }
      }
    );
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

  ngOnInit(): void {
  }

}
