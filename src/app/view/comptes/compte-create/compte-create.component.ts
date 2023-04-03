import {Component, OnInit} from '@angular/core';
import {CompteService} from "../../../controller/service/compte/compte.service";
import {Compte} from "../../../controller/model/compte/compte";
import {Router} from '@angular/router';

@Component({
  selector: 'app-compte-create',
  templateUrl: './compte-create.component.html',
  styleUrls: ['./compte-create.component.css']
})
export class CompteCreateComponent  implements OnInit{

  constructor(private  compteService: CompteService , private router: Router) {}

  goToSignup() {
    this.router.navigate(['/signup']);
  }
  ngOnInit(): void {
  }
  public save(): void{
    this.compteService.save(this.compte).subscribe(data =>{
      if(data != null){
        alert('SAVE SUCCESS');
      }else{
        alert('SAVE ERROR');
      }
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
