import React from "react";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { ProductFruitItems } from './product.items';
import { cart$ } from "@sspaeshop/shopping-service";

export default function ProductDisplay() {

  const addToBasket = function () {
    cart$.next({
      numberOfItems: cart$.value.numberOfItems + 1
    });
  };

  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" justifyContent="flex-start" m={1} p={1} bgcolor="background.paper">
        { ProductFruitItems.map((item, i) => (
          <Box key={'item' + i} p={1} mr={2} style={{backgroundColor: 'rgb(224, 224, 224)'}}>
            <p>{ item.name }</p>
            <Button variant="contained" size="small" color="primary"
              onClick={() => addToBasket()}>
              Add to cart
            </Button>
          </Box>
        )) }
      </Box>
    </div>
  );
}
