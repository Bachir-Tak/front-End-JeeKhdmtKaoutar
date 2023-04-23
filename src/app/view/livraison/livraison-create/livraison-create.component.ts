import {Component, OnInit} from '@angular/core';
import {LivraisonService} from "../../../controller/service/livraison/livraison.service";
import {Livraison} from "../../../controller/model/livraison/livraison.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommandeService} from "../../../controller/service/commande/commande.service";



@Component({
  selector: 'app-livraison-create',
  templateUrl: './livraison-create.component.html',
  styleUrls: ['./livraison-create.component.css']
})
export class LivraisonCreateComponent implements OnInit {

  constructor(private livraisonService: LivraisonService,private route:ActivatedRoute, private commandeSerivce:CommandeService, private router:Router) {

  }


  public save(): void {
    this.livraisonService.save(this.livraison).subscribe(data => {
        if (data != null) {
        // this.livraisons.push({...this.livraison});
        // this.livraisonService.livraison == null;
          alert('Save Success');
          this.router.navigate(['/paiement', this.livraison.commande.ref])
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



  ngOnInit(): void {
    this.commandeSerivce.findByRef(this.route.snapshot.params["CommandeRef"]).subscribe(data=>{this.livraison.commande=data});
  }
  telechargerAvoirLivraison(livraison: any) {
    const avoirlivraisonContent = ``;
    const avoirlivraisonFileName = `avoir-livraison-${livraison.id}.pdf`;
    const blob = new Blob([avoirlivraisonContent], { type: 'pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = avoirlivraisonFileName;
    link.click();
    window.URL.revokeObjectURL(url);
  }

}
