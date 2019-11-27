import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Observable } from "rxjs/observable";
import { MEAT_API } from "app/app.api";
import { Http } from "@angular/http";
import { ErrorHandler } from "app/app.error-handler";
import { Bar } from "app/bares/bar/bar.model";

@Injectable()
export class BaresService {
  constructor(private http: Http){}

  bares(): Observable<Bar[]>{
    return this.http.get(`${MEAT_API}/bares`).map(response => response.json())
      .catch(ErrorHandler.handlerError)
  }

}
