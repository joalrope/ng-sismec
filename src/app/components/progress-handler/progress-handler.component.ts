import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-progress-handler",
  templateUrl: "./progress-handler.component.html",
  styles: [],
})
export class ProgressHandlerComponent implements OnInit {
  @Input() progress: number = 0;
  @Input() btnClass: string = "btn-primary";

  @Output() curProgress: EventEmitter<number> = new EventEmitter();

  updateProgress(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.curProgress.emit(100);
      return (this.progress = 100);
    }

    if (this.progress <= 0 && value < 0) {
      this.curProgress.emit(0);
      return (this.progress = 0);
    }

    this.progress += value;
    this.curProgress.emit(this.progress);
    return;
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.curProgress.emit(this.progress);
  }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
}
