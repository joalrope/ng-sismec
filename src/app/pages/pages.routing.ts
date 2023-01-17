import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RouterParentPageComponent } from "./router-parent-page.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: RouterParentPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "chart1", component: Graph1Component },
      { path: "account-settings", component: AccountSettingsComponent },
      { path: "promises", component: PromisesComponent },
      { path: "observables", component: RxjsComponent },
      //{ path: "", redirectTo: "/dashboard", pathMatch: "full" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
