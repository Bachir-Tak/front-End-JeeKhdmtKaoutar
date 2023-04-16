import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-courbe',
  templateUrl: './courbe.component.html',
  styleUrls: ['./courbe.component.css']
})
export class CourbeComponent implements OnInit{
  public chart : any;
  constructor() {
  }

  ngOnInit(): void {
    this.createChart()
  }
  createChart(){
    this.chart = new Chart("courbeChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-2-2','2022-2-2', ],
        datasets: [
          {
            label: "Sales",
            data: ['2', '2'],
            backgroundColor: '#005c9b',
            fill:true,cubicInterpolationMode:'monotone'
          },

        ]
      },
      options: {

        aspectRatio:2.5
      }

    });
  }
}
