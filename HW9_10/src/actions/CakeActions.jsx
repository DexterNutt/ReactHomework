import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";

export const buyCake = (numberOfCakes) => {
  return {
    type: BUY_CAKE,
    payload: numberOfCakes,
  };
};

export const restockCakes = (numberOfCakes) => {
  return {
    type: RESTOCK_CAKES,
    payload: numberOfCakes,
  };
};
