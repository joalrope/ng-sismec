import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../services/settings.service";

declare function loadPlugins(): void;

@Component({
  selector: "app-router-parent-page",
  templateUrl: "./router-parent-page.component.html",
  styles: [],
})
export class RouterParentPageComponent implements OnInit {
  year = new Date().getFullYear();

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    loadPlugins();
  }
}
