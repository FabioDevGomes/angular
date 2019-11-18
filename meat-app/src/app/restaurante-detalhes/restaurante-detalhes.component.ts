import { Component, OnInit } from '@angular/core';
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-restaurante-detalhes',
  templateUrl: './restaurante-detalhes.component.html'
})
export class RestauranteDetalhesComponent implements OnInit {

  restaurante: Restaurante

  constructor(private restaurantService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('fazendo o subscribe = RestauranteDetalhesComponent > ngOnInit');
    this.restaurantService.restaurantePorId(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante)
  }

}
