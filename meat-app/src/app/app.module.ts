import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from "app/app.routes";
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { RestauranteDetalhesComponent } from './restaurante-detalhes/restaurante-detalhes.component';
import { MenuComponent } from './restaurante-detalhes/menu/menu.component';
import { CarrinhoComponent } from './restaurante-detalhes/carrinho/carrinho.component';
import { ItemMenuComponent } from './restaurante-detalhes/item-menu/item-menu.component';
import { ReviwesComponent } from './restaurante-detalhes/reviwes/reviwes.component';
import { FilmesComponent } from "app/restaurante-detalhes/filmes/filmes.component";
import { BaresComponent } from './bares/bares.component';
import { BarComponent } from 'app/bares/bar/bar.component';
import { BarDetalhesComponent } from './bar-detalhes/bar-detalhes.component';
import { BaresService } from "app/bares/bares.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalhesComponent,
    MenuComponent,
    CarrinhoComponent,
    ItemMenuComponent,
    ReviwesComponent,
    FilmesComponent,
    BaresComponent,
    BarComponent,
    BarDetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, BaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
