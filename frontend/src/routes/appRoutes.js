import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  SigninScreen,
  RegisterScreen,
  ProductsScreen,
} from "screens";

const appRoutes = [
  {
    name: "ProductsScreen",
    component: ProductsScreen,
    exact: false,
    path: "/products",
  },
  {
    name: "SigninScreen",
    component: SigninScreen,
    exact: false,
    path: "/signin",
  },
  {
    name: "RegisterScreen",
    component: RegisterScreen,
    exact: false,
    path: "/register",
  },
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
