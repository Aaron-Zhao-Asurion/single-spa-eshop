import React, { useState, useEffect } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cart$ } from "@sspaeshop/shopping-service";

export default function CartDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cartUpdate = cart$.subscribe(info => {
      setCount(cart$.value.numberOfItems);
    });

    return function cleanup() {
      cartUpdate.unsubscribe();
    }
  }, []);

  return (
    <div data-testid="cart-display">
      <span id="cart-item-count">{ count }</span>
      <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
    </div>
  );
}
