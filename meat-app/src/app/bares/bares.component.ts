import { Component, OnInit } from '@angular/core';
import { Bar } from "app/bares/bar/bar.model";
import { BaresService } from "app/bares/bares.service";

@Component({
  selector: 'mt-bares',
  templateUrl: './bares.component.html'
})
export class BaresComponent implements OnInit {

  bares: Bar[]

  constructor(private baresService: BaresService) { }

  ngOnInit() {
    this.baresService.bares().subscribe(bares => this.bares = bares)
  }

}
