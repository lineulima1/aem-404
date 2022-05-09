import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-typograph",
  templateUrl: "./typograph.component.html",
  styleUrls: ["./typograph.component.scss"],
})
export class TypographComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Input() fontSize: string;
  @Input() textAlign: string;
  @Input() lineHeight: string;
  constructor() {}

  ngOnInit(): void {}
}
