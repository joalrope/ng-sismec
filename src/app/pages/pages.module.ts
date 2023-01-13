import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../router/app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { RouterParentPageComponent } from "./router-parent-page.component";
import { SharedModule } from "../shared/shared.module";

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
    SharedModule,
    AppRoutingModule,
    //
  ],
})
export class PagesModule {}
