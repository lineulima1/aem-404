import { Component, OnInit, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() imageClass: string;
  @Input() type: string;
  @Input() placeholder: string;

  name: string;
  icon: string;
  value: string;
  valueChanged: Subject<string> = new Subject<string>();

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.clear();

    this.valueChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((model) => {
        this.value = model;
        this.localStorageService.add(this.name, this.value);
      });
  }
  onChange(value: string) {
    this.valueChanged.next(value);
  }
}
