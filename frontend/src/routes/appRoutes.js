import {
  HomeScreen,
  ProductScreen,
  CartScreen,
  SigninScreen,
  RegisterScreen,
  ProductsScreen,
  ShippingScreen,
  PaymentScreen,
  PlaceOrderScreen,
} from "screens";

const appRoutes = [
  {
    name: "PlaceOrderScreen",
    component: PlaceOrderScreen,
    exact: false,
    path: "/placeorder",
  },
  {
    name: "PaymentScreen",
    component: PaymentScreen,
    exact: false,
    path: "/payment",
  },
  {
    name: "ShippingScreen",
    component: ShippingScreen,
    exact: false,
    path: "/shipping",
  },
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
