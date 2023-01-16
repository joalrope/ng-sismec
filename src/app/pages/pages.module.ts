import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgChartsModule } from "ng2-charts";

import { AppRoutingModule } from "../router/app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { RouterParentPageComponent } from "./router-parent-page.component";

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    RouterParentPageComponent,
    //
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graph1Component,
    RouterParentPageComponent,
    //
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,

    //
  ],
})
export class PagesModule {}
