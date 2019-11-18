import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { Observable } from "rxjs/observable";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'mt-reviwes',
  templateUrl: './reviwes.component.html'
})
export class ReviwesComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])

    //this.restaurantService
    //.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    //.subscribe(reviews => this.reviews = reviews)
  }

}
