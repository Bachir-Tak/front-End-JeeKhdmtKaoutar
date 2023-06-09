import {Component, OnInit} from '@angular/core';
import Chart from "chart.js/auto";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit{
  public chart : any;
  constructor() {
  }

  ngOnInit(): void {
    this.createChart()
  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
        datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#005c9b'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: '#7d55b9'
          }
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive:true,
        maintainAspectRatio:false
      }

    });
  }
}
