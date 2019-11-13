import { Routes } from "@angular/router/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantesComponent } from "app/restaurantes/restaurantes.component";
import { RestauranteDetalhesComponent } from "app/restaurante-detalhes/restaurante-detalhes.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurant', component: RestaurantesComponent},
  {path: 'restaurant/:id', component: RestauranteDetalhesComponent}

]
