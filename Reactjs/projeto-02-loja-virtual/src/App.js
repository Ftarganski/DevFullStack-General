import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { userIsLoggedIn } from "./services/auth/auth";

const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

function App() {
  const history = useNavigate();

  useEffect(() => {
  
  }, []);

  return (
    <Router>
      <Suspense fallback={"Carregando"}>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/produt" element={<Product />} />
          <Route path="*" element={<NotFound />} />
          <Route />
          <Route />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
