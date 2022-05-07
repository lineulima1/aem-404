import { Component, OnInit, Input } from "@angular/core";
import { MapTo } from "@adobe/aem-angular-editable-components";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonType = "button";
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/button")(ButtonComponent);
