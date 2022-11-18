import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import Cart from "./pages/Cart";
import LoginScreen from "./pages/LoginScreen";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          {/* Welcome */}
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
          </Routes>
          {/* <Home /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
