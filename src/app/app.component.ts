import { Component } from "@angular/core";

import COLORS from "./colors.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  currentIndex = 0;
  currentBorderColor: string = null;
  availableBorderColors = COLORS;

  switchBorderColor() {
    if (this.currentBorderColor === null) {
      this.currentBorderColor = this.availableBorderColors[0];
      return;
    }

    this.currentIndex++;
    this.currentIndex %= this.availableBorderColors.length;
    this.currentBorderColor = this.availableBorderColors[this.currentIndex];
  }
}
