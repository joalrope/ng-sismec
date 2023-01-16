import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgChartsModule } from "ng2-charts";

import { ProgressHandlerComponent } from "./progress-handler/progress-handler.component";
import { DoughnutComponent } from "./doughnut/doughnut.component";

@NgModule({
  declarations: [
    ProgressHandlerComponent,
    DoughnutComponent,
    //
  ],
  exports: [
    ProgressHandlerComponent,
    DoughnutComponent,
    //
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,

    //
  ],
})
export class ComponentsModule {}
