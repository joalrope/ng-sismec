import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.css"],
})
export class ProgressComponent implements OnDestroy {
  progress1: number = Number(localStorage.getItem("progress1")) || 0;
  progress2: number = Number(localStorage.getItem("progress2")) || 0;

  get getPercentage1() {
    return `${this.progress1}%`;
  }

  get getPercentage2() {
    return `${this.progress2}%`;
  }

  updateProgress(value: number) {
    this.progress1 = value;
  }
  ngOnDestroy(): void {
    localStorage.setItem("progress1", String(this.progress1));
    localStorage.setItem("progress2", String(this.progress2));
  }
}
