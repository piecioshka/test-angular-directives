import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SuperBorderDirective } from "./directives/super-border.directive";

@NgModule({
  declarations: [AppComponent, SuperBorderDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
