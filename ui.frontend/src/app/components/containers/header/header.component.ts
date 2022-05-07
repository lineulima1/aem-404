import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() attributes: [];
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/header-component")(HeaderComponent);
