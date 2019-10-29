import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fabio = {name: 'buscando via fabio.name', exibir: true}
  junior = {name: 'buscando via juior.name', exibir: false}

  constructor() { }

  ngOnInit() {
  }

}
