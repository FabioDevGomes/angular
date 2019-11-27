import { Routes } from "@angular/router/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestaurantesComponent } from "app/restaurantes/restaurantes.component";
import { RestauranteDetalhesComponent } from "app/restaurante-detalhes/restaurante-detalhes.component";
import { MenuComponent } from "app/restaurante-detalhes/menu/menu.component";
import { ReviwesComponent } from "app/restaurante-detalhes/reviwes/reviwes.component";
import { FilmesComponent } from "app/restaurante-detalhes/filmes/filmes.component";
import { BaresComponent } from "app/bares/bares.component";
import { BarDetalhesComponent } from "app/bar-detalhes/bar-detalhes.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurant', component: RestaurantesComponent},
  {path: 'restaurant/:id', component: RestauranteDetalhesComponent,
    children:  [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviwesComponent},
        {path: 'filmes', component: FilmesComponent}
    ]
  },
  {path: 'bar', component: BaresComponent},
  {path: 'bar/:id', component: BarDetalhesComponent}
]
