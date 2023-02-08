import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CustomizedMenus from "./menu/menu.componet";
import CartDisplay from "./cart/car-display.component";
import { UserBasketMenuItems } from "./menu/menu.items";
const mitekScienceSDK = require("./vendors/mitek-science-sdk");

export default function Root(props) {
  const title = props.name
    ?.split("/")[1]
    ?.split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
  console.log("mitekScienceSDK", mitekScienceSDK);
  return (
    <div>
      <h1>{title}</h1>
      <p>{props.name} is mounted!</p>
      <div style={{ width: "100%" }}>
        <Box
          display="flex"
          justifyContent="flex-start"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <Box mr={2}>
            <CustomizedMenus menu={UserBasketMenuItems}></CustomizedMenus>
          </Box>
          <Box mr={4}>
            <Button variant="contained" color="primary">
              Returns & Orders
            </Button>
          </Box>
          <Box mr={2}>
            <CartDisplay></CartDisplay>
          </Box>
        </Box>
      </div>
    </div>
  );
}
