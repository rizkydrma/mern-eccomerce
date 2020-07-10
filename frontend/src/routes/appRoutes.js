import { HomeScreen, ProductScreen } from "screens";

const appRoutes = [
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
