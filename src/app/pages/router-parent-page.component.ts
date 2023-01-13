import { Component } from "@angular/core";

@Component({
  selector: "app-router-parent-page",
  templateUrl: "./router-parent-page.component.html",
  styles: [],
})
export class RouterParentPageComponent {
  year = new Date().getFullYear();
}
