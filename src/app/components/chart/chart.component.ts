import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  results: any[] = [
    {
      name: 'Juego 1',
      value: 20,
    },
    {
      name: 'Juego 2',
      value: 50,
    },
    {
      name: 'Juego 3',
      value: 72,
    },
    {
      name: 'Juego 4',
      value: 44,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  interval;

  constructor() {
    this.interval = setInterval(() => {
      console.log('pulso');

      const newResults = [...this.results];

      for (const i in newResults) {
        if (true) {
          this.results[i].value = Math.round(Math.random() * 500);
        }
      }
      this.results = [...newResults];
    }, 1500);
  }

  ngOnInit(): void {}

  onSelect(event): void {
    console.log(event);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
