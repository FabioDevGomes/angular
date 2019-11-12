import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/observable";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http";

@Injectable()
export class RestaurantesService {
  constructor(private http: Http){}

  restaurantes(): Observable<Restaurante[]>{
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
  }
}
