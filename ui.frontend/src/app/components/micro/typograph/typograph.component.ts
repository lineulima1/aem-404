import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-typograph",
  templateUrl: "./typograph.component.html",
  styleUrls: ["./typograph.component.css"],
})
export class TypographComponent implements OnInit {
  @Input() text = "Hello World";
  @Input() type: string;
  constructor() {}

  ngOnInit(): void {}
}
