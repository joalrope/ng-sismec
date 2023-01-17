import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private linkTheme = document.querySelector("#theme");

  constructor() {
    const url: string =
      localStorage.getItem("theme") || "./assets/css/colors/defaultTheme.css";

    this.linkTheme?.setAttribute("href", url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute("href", url);

    localStorage.setItem("theme", url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const linkElems: NodeListOf<Element> =
      document.querySelectorAll(".selector");

    linkElems.forEach((elem) => {
      elem.classList.remove("working");

      const selectedTheme = elem.getAttribute("data-theme");
      const selectedThemeUrl = `./assets/css/colors/${selectedTheme}.css`;
      const currentThemeUrl = this.linkTheme?.getAttribute("href");

      if (currentThemeUrl === selectedThemeUrl) {
        elem.classList.add("working");
      }
    });
  }
}
