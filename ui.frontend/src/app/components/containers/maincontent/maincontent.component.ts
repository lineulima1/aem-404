import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-maincontent",
  templateUrl: "./maincontent.component.html",
  styleUrls: ["./maincontent.component.scss"],
})
export class MaincontentComponent implements OnInit {
  @Input() itens: [];
  @Input() imageSrc: object;
  @Input() imageAlt: string;
  @Input() buttonText: string;
  @Input() buttonType: string;
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/maincontent-component")(MaincontentComponent);
