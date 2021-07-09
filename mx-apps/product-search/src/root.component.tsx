import React, { useState } from "react";
import ProductDisplay from "./display/product-display.component";
import { ProductFruitItems } from './display/product.items';

export default function Root(props) {
  const title = props.name?.split('/')[1]?.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ props.name } is mounted!</p>
      <ProductDisplay products={ProductFruitItems}></ProductDisplay>
    </div>
  );
}