import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>Welcome</Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
