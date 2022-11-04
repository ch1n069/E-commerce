import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          Welcome
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
