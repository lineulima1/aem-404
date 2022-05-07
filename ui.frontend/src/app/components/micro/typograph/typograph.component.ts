import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-typograph",
  templateUrl: "./typograph.component.html",
  styleUrls: ["./typograph.component.scss"],
})
export class TypographComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
}
