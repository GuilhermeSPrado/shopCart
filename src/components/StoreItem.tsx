import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imgUrl} height="300px" style={{ objectFit: "contain" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-center mb-4">
          <span className="fs-5">{name}</span>
          <span className="text-muted" style={{fontSize:'1rem'}}>{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100 btn-primary" onClick={() => increaseCartQuantity(id)}>
              + Adicionar ao carrinho
            </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-between">
              <div className="btn-group">
                <Button className="btn-secondary" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <span className="fs-4 mx-2">{quantity}</span>
                <Button className="btn-secondary" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                Remover
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
