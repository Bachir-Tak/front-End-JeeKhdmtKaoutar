import {Component, OnInit} from '@angular/core';
import {DemandeService} from "../../../controller/service/demande/demande.service";
import {Demande} from "../../../controller/model/demande/demande.model";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../controller/service/client/client.service";
import {DemandeProduit} from "../../../controller/model/demandeProduit/demande-produit.model";
import {Produit} from "../../../controller/model/produit/produit";
import {ProduitService} from "../../../controller/service/produit/produit.service";
import {CategorieProduitService} from "../../../controller/service/categorieProduit/categorie-produit.service";
import {CategorieProduit} from "../../../controller/model/categorieProduit/categorie-produit";

@Component({
  selector: 'app-demande-create',
  templateUrl: './demande-create.component.html',
  styleUrls: ['./demande-create.component.css']
})
export class DemandeCreateComponent implements OnInit {


  constructor(private demandeService: DemandeService, private clientService: ClientService, private produitService: ProduitService,private route: ActivatedRoute) {

  }

  listProduit!: Array<Produit>;


  public addClient() {
    this.clientService.findByCin(this.route.snapshot.params["ClientCin"]).subscribe(data => this.demande.client = data);
  }

  public save(): void {
    this.demandeService.save(this.demande).subscribe(data => {
      if( data == -2){
        alert("Un des produits est déjà disponible pas besoin de le demander.");
      }
      else{
        alert("Ajouté")
      }
      this.demande = new Demande();
      this.addClient();
      this.demandeProduit = new DemandeProduit()
    })
  }

  ngOnInit(): void {
    this.addClient();
    this.produitService.findAll().subscribe(data => {
      this.listProduit = data
    });
  }

  get demande(): Demande {
    return this.demandeService.demande;
  }

  set demande(value: Demande) {
    this.demandeService.demande = value;
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
