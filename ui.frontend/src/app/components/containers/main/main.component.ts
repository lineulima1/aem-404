import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() buttonText: string;
  @Input() buttonType: string;
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/main-component")(MainComponent);
