import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  public menu: any[] = [
    {
      title: "Dashboard",
      icon: "mdi mdi-gauge",
      childs: [
        { title: "main", url: "/" },
        { title: "Progress Bar", url: "progress" },
        { title: "Graph 1", url: "chart1" },
        { title: "Promises", url: "promises" },
        { title: "Observables", url: "observables" },
      ],
    },
  ];

  constructor() {}
}
