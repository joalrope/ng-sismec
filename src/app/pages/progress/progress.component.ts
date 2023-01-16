import { Component } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent {
  progress1: number = 0;
  progress2: number = 0;

  get getPercentage1() {
    return `${this.progress1}%`;
  }

  get getPercentage2() {
    return `${this.progress2}%`;
  }

  updateProgress(value: number) {
    this.progress1 = value;
  }
}
