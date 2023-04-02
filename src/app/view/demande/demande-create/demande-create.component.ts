import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande.model";
import {Client} from "../../../controller/model/client/client.model";
import {ActivatedRoute} from "@angular/router";
import {DemandeProduitService} from "../../../controller/service/demandeProduit/demande-produit.service";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit{
  content='<label for="produit" class="form-label fw-semibold">Produit</label> <select name="produit" id="produit"> <option *ngFor="let i of demande.demandeProduits" value={{i.produit}}></option> </select> <div class="form-group" class="demandeProduits"> <label for="quantite" class="form-label fw-semibold">Quantite</label> <input id="quantite" type="number" class="form-control"> </div>';
  public contentAdd():void{
    this.content+='<label for="produit" class="form-label fw-semibold">Produit</label> <select name="produit" id="produit"> <option *ngFor="let i of demande.demandeProduits" value={{i.produit}}></option> </select> <div class="form-group" class="demandeProduits"> <label for="quantite" class="form-label fw-semibold">Quantite</label> <input id="quantite" type="number" class="form-control"> </div>';
  }

  constructor(private demandeService : DemandeService, private route: ActivatedRoute, private demandeProduitService:DemandeProduitService) {

  }
  public save():void {
    this.demandeService.save(this.demande,this.route.snapshot.params["clientId"]).subscribe(data=>alert(data))
  }
  ngOnInit(): void {

  }
  get demande(): Demande {
    return this.demandeService.demande;
  }

  set demande(value: Demande) {
    this.demandeService.demande = value;
  }

  get demandes(): Array<Demande> {
    return this.demandeService.demandes;
  }

  set demandes(value: Array<Demande>) {
    this.demandeService.demandes = value;
  }
}
