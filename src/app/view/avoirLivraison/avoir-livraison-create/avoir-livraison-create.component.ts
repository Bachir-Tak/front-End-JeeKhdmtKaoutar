import {Component, OnInit} from '@angular/core';
import {AvoirLivraisonService} from "../../../controller/service/avoirLivraison/avoir-livraison.service";
import {AvoirLivraison} from "../../../controller/model/avoirLivraison/avoir-livraison.model";

@Component({
  selector: 'app-avoir-livraison-create',
  templateUrl: './avoir-livraison-create.component.html',
  styleUrls: ['./avoir-livraison-create.component.css']
})
export class AvoirLivraisonCreateComponent implements OnInit {
  constructor(private avoirLivraisonService: AvoirLivraisonService) {

  }

  public save(): void {
    this.avoirLivraisonService.save().subscribe(data => {
        if (data != null) {
          this.avoirLivraisons.push({...this.avoirLivraison});
          this.avoirLivraisonService.avoirLivraison == null;
          alert('Save Success');
        } else {
          alert('Save Error ::: code Exixt');
        }
      });
    }

  ngOnInit(): void {
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
