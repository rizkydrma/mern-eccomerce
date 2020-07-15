import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  SigninScreen,
  RegisterScreen,
} from "screens";

const appRoutes = [
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
