import CounterButton from "./components/button";
import { useState } from "react";
import { Card } from "react-bootstrap";

function App() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((Prev) => Prev + 1);
  const decrement = () => setCount((Prev) => (Prev > 0 ? Prev - 1 : 0));
  const reset = () => setCount(0);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <Card
        style={{
          width: "30rem",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "blue",
        }}
      >
        <Card.Body>
          <Card.Title>Counter-app</Card.Title>
          <h2>{count}</h2>
          <div className="d-flex justify-content-between">
            <CounterButton
              text="Increment"
              variant="primary"
              onClick={increment}
            />

            <CounterButton
              text="Decrement"
              variant="danger"
              onClick={decrement}
            />

            <CounterButton text="Reset" variant="success" onClick={reset} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default App;
