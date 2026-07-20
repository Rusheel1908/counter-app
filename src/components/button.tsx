type CounterButtonProps = {
  text: string;
  onClick: () => void;
  variant: "primary" | "danger" | "success";
};
import { Button } from "react-bootstrap";

const CounterButton = ({ text, onClick, variant }: CounterButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};
export default CounterButton