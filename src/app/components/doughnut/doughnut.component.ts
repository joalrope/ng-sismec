import { Component, Input, SimpleChanges } from "@angular/core";
import { ChartData } from "chart.js";

@Component({
  selector: "app-doughnut",
  templateUrl: "./doughnut.component.html",
  styles: [],
})
export class DoughnutComponent {
  // Doughnut
  @Input() title: string = "untitled";
  public colors: string[] = ["#009452", "#009FEE", "#F02059"];
  public data: number[] = [10, 450, 100];

  public labels: string[] = ["Label 1", "Label 2", "Label 3"];

  @Input("data") doughnutChartData: ChartData<"doughnut"> = {
    labels: this.labels,

    datasets: [
      {
        data: this.data,
        backgroundColor: this.colors,
      },
    ],
  };
}
