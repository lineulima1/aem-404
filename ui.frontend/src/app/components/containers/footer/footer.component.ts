import { Component, OnInit, Input } from "@angular/core";
import { MapTo } from "@adobe/aem-angular-editable-components";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() fontSize: number;
  @Input() textAlign: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.textAlign);
  }
}
MapTo("angularapp/components/footer-component")(FooterComponent);
