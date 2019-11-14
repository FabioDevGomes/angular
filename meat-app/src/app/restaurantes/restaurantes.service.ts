import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Observable } from "rxjs/observable";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http";
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantesService {
  constructor(private http: Http){}

  restaurantes(): Observable<Restaurante[]>{
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

  restaurantePorId(id: string): Observable<Restaurante>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }
}
