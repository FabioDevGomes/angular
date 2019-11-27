import { Component, OnInit, Input } from '@angular/core';
import { Bar } from "app/bares/bar/bar.model";

@Component({
  selector: 'mt-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {

  @Input() bar: Bar

  constructor() { }

  ngOnInit() {
  }

}
