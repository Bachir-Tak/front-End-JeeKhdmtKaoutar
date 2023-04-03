import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liste-el-create',
  templateUrl: './liste-el-create.component.html',
  styleUrls: ['./liste-el-create.component.css']
})
export class ListeELCreateComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  sub!: Subscription;
  text='';
  link='';
  ngOnInit() {
    this.sub = this.route
      .data
      .subscribe(v =>  {this.text=v['text']; this.link=v['link'];});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
