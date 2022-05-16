import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  constructor() {}

  ngOnInit(): void {}
}
MapTo("angularapp/components/article-component")(ArticleComponent);
