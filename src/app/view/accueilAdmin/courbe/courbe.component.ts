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
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        datasets: [
          {
            label: "Sales",
            data: ['65', '59', '180', '81', '500', '55', '40', '576'],
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
