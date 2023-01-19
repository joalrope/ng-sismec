import { Component, OnDestroy } from "@angular/core";
import { ActivationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  //
  public curPageTitle!: string;
  public curPageTitle$: Subscription;

  constructor(private Router: Router) {
    this.curPageTitle$ = this.getCurPage().subscribe({
      next: ({ title }) => {
        this.curPageTitle = title;
        document.title = `AdminPro - ${title}`;
      },
    });
  }

  ngOnDestroy(): void {
    this.curPageTitle$.unsubscribe();
  }

  getCurPage() {
    return this.Router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
