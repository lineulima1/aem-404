import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() type: string;
  @Input() text: string;
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/header-component")(HeaderComponent);
