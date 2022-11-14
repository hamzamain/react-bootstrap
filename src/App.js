import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import Card from "./components/Card/Card";
import Carosel from "./components/Carosel/Carosel";

function App() {
  const products = [
    { id: 1, name: "mack book pro", price: 145000 },
    { id: 2, name: "mack book crow", price: 155000 },
    { id: 3, name: "mack book Grow", price: 165000 },
  ];
  return (
    <div className="App">
      <div className="card-group">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
      <Button variant="danger">hello</Button>
      <Spinner animation="grow" variant="danger" />
      <Carosel></Carosel>
    </div>
  );
}

export default App;
