import React, { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// @ts-ignore
import { cart$ } from "@sspaeshop/shopping-service";
import { useEffect } from "react";

export default function CartDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('display lisenting');
    const cartUpdate = cart$.subscribe(info => {
      setCount(info.numberOfItems);
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
