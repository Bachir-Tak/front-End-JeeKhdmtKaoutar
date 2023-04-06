import {Component, OnInit} from '@angular/core';
import {ConnexionService} from "./controller/service/connexion/connexion.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private connexionService:ConnexionService) {
  }

  title = 'JEEproject';

  user=this.connexionService.connected[2];

  connected=this.connexionService.connected;


  ngOnInit(): void {
  }


}
