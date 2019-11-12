import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";

export class RestaurantesService {
  constructor(){}

  rests: Restaurante[] = [
    {
      id: "001",
      nome: "Mais ki pão Stone",
      categoria: "Padaria e Lanches",
      temporeEntrega: "10 min",
      avalicao: 10.0,
      caminhoImagem: "assets/img/restaurants/breadbakery.png"
    },
    {
      id: "002",
      nome: "Fábio lanches",
      categoria: "Padaria e Lanches",
      temporeEntrega: "10 min",
      avalicao: 8.0,
      caminhoImagem: "assets/img/restaurants/icy.png"
    },
    {
      id: "003",
      nome: "Like a Stone",
      categoria: "Padaria e Lanches",
      temporeEntrega: "16 min",
      avalicao: 9.0,
      caminhoImagem: "assets/img/restaurants/tasty.png"
    }
  ]

  restaurantes(): Restaurante[]{
    return this.rests
  }
}
