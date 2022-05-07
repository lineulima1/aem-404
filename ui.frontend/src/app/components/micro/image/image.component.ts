import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() imageClass: string;
  constructor() {}

  ngOnInit(): void {}
}
