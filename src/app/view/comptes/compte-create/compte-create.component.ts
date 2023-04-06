import {Component, OnInit} from '@angular/core';
import {CompteService} from "../../../controller/service/compte/compte.service";
import {Compte} from "../../../controller/model/compte/compte";
import {Router} from '@angular/router';
import {ConnexionService} from "../../../controller/service/connexion/connexion.service";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-compte-create',
  templateUrl: './compte-create.component.html',
  styleUrls: ['./compte-create.component.css']
})
export class CompteCreateComponent implements OnInit {

  constructor(private compteService: CompteService, private connexionService:ConnexionService,private appComponent: AppComponent, private router: Router) {
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  ngOnInit(): void {
  }

  public findByEmail(): void {
    this.compteService.findByEmail(this.compte).subscribe(data => {
      if(data==null){
        alert("Utilisateur inexistant")
        this.connexionService.connected[0]=false;
      }
      else if (this.compte.motDePasse == data.motDePasse) {
        this.compte = data;
        if (this.compte.admin==true){
          this.appComponent.user=true;
          this.connexionService.connected[2]=true;
        }
        else{
          this.appComponent.user=false;
          this.connexionService.connected[2]=false;
        }
        this.connexionService.connected[0]=true;
        this.connexionService.connected[1]=this.compte;
      } else {
        alert("Mot de passe eronné");
        this.connexionService.connected[0]=false;
      }
      console.log("azdaz"+this.connexionService.connected[2])
      ;
    });
  }

  get compte(): Compte {
    return this.compteService.compte;
  }

  set compte(value: Compte) {
    this.compteService.compte = value;
  }

  get comptes(): Compte[] {
    return this.compteService.comptes;
  }

  set comptes(value: Compte[]) {
    this.compteService.comptes = value;
  }

}
