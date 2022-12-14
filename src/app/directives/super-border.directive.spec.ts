import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { SuperBorderDirective } from "./super-border.directive";

@Component({
  selector: "app-fake",
  template: ` <div appSuperBorder></div> `,
})
class FakeComponent {}

describe("SuperBorderDirective", () => {
  let fakeComponent: ComponentFixture<FakeComponent>;
  let directive: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FakeComponent, SuperBorderDirective],
    });

    fakeComponent = TestBed.createComponent(FakeComponent);
    directive = fakeComponent.debugElement.query(
      By.directive(SuperBorderDirective)
    );
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });
});
