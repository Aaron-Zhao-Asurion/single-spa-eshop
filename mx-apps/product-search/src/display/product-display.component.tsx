import React, { useState } from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { cart$, delta, updateDelta } from "@sspaeshop/shopping-service";

export default function ProductDisplay(props) {
  const [deltaVal, setdeltaVal] = useState(delta.value);

  const addToBasket = () => {
    cart$.next({
      numberOfItems: cart$.value.numberOfItems + 1
    });
  };

  const randomDelta = () => {
    updateDelta(Math.random() * 10);
    setdeltaVal(delta.value);
  };

  return (
    <div style={{ width: '100%' }}>
      <div>{ deltaVal }</div>
      <Button variant="contained" size="small" color="primary"
        onClick={randomDelta}>
        Random Delta
      </Button>
      <Box display="flex" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
        { props.products.map((item, i) => (
          <Box data-testid="product-box" key={'item' + i} p={1} mr={2} style={{backgroundColor: 'rgb(224, 224, 224)'}}>
            <p>{ item.name }</p>
            <Button variant="contained" size="small" color="primary"
              onClick={addToBasket}>
              Add to cart
            </Button>
          </Box>
        )) }
      </Box>
    </div>
  );
}
