import React, { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cart$ } from "@sspaeshop/shopping-service";
import { useEffect } from "react";

export default function CartDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const cartUpdate = cart$.subscribe(info => {
      setCount(cart$.value.numberOfItems);
    });

    return function cleanup() {
      cartUpdate.unsubscribe();
    }
  });

  return (
    <div>
      { count }
      <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
    </div>
  );
}
