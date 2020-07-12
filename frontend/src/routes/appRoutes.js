import { HomeScreen, ProductScreen, CartScreen } from "screens";

const appRoutes = [
  {
    name: "CartScreen",
    component: CartScreen,
    exact: false,
    path: "/cart/:id?",
  },
  {
    name: "ProductScreen",
    component: ProductScreen,
    exact: false,
    path: "/product/:id",
  },
  {
    name: "HomeScreen",
    component: HomeScreen,
    exact: true,
    path: "/",
  },
];

export default appRoutes;
