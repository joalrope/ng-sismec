import { Component } from "@angular/core";
import { ChartData } from "chart.js";

@Component({
  selector: "app-graph1",
  templateUrl: "./graph1.component.html",
  styles: [],
})
export class Graph1Component {
  public salesLabels: string[] = ["Tacos", "Refrescos", "Snacks"];
  public salesValue: number[] = [90, 200, 130];
  public salesColors: string[] = ["#9fd3c7", "#385170", "#142d4c"];
  public salesData: ChartData<"doughnut"> = {
    labels: this.salesLabels,
    datasets: [
      {
        data: this.salesValue,
        backgroundColor: this.salesColors,
      },
    ],
  };

  public purchaseLabels: string[] = ["Pollo", "Carne", "Pavo"];
  public purchaseValue: number[] = [60, 120, 320];
  public purchaseColors: string[] = ["#ff6f3c", "#ff9a3c", "#ffc93c"];
  public purchaseData: ChartData<"doughnut"> = {
    labels: this.purchaseLabels,
    datasets: [
      {
        data: this.purchaseValue,
        backgroundColor: this.purchaseColors,
      },
    ],
  };

  public importsLabels: string[] = ["Mesas", "Sillas", "Cubiertos"];
  public importsValue: number[] = [260, 80, 20];
  public importsColors: string[] = ["#005792", "#00bbf0", "#fdb44b"];
  public importsData: ChartData<"doughnut"> = {
    labels: this.importsLabels,
    datasets: [
      {
        data: this.importsValue,
        backgroundColor: this.importsColors,
      },
    ],
  };

  public exportsLabels: string[] = ["Neveras", "Refrigeradores", "Licuadoras"];
  public exportsValue: number[] = [4, 2, 12];
  public exportsColors: string[] = ["#27296d", "#5e63b6", "#a393eb"];
  public exportsData: ChartData<"doughnut"> = {
    labels: this.exportsLabels,
    datasets: [
      {
        data: this.exportsValue,
        backgroundColor: this.exportsColors,
      },
    ],
  };
}
