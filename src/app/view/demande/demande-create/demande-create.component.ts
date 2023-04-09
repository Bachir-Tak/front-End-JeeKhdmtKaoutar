import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande.model";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../controller/service/client/client.service";
import {DemandeProduit} from "../../../controller/model/demandeProduit/demande-produit.model";
import {Produit} from "../../../controller/model/produit/produit";
import {ProduitService} from "../../../controller/service/produit/produit.service";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {


  constructor(private demandeService: DemandeService, private clientService: ClientService, private route: ActivatedRoute) {

  }


  public addClient() {
    this.clientService.findByCin(this.route.snapshot.params["ClientCin"]).subscribe(data => this.demande.client = data);
  }

  public save(): void {
    this.demandeService.save(this.demande).subscribe(data => {
      alert(data);
      this.demande = new Demande();
      this.demandeProduit = new DemandeProduit()
    })
  }

  ngOnInit(): void {
    this.addClient();
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

  get demandeProduit(): DemandeProduit {
    return this.demandeService.demandeProduit;
  }

  set demandeProduit(value: DemandeProduit) {
    this.demandeService.demandeProduit = value;
  }

  public addDemandeProduit() {
    this.demandeService.addDemandeProduit();
    this.demandeProduit = new DemandeProduit();
  }
}
