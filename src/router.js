import PokemonPage from "./views/PokemonPage.vue";
import HomePage from "./views/HomePage.vue";

export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/pokemon",
    component: PokemonPage,
  },
];
