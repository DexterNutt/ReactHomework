import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      const numOfCakesToBuy = Number(action.payload);
      if (isNaN(numOfCakesToBuy)) {
        return {
          ...state,
          message: `Please enter a valid NUMBER of cakes!`,
        };
      } else if (state.cakes - numOfCakesToBuy < 0) {
        return {
          ...state,
          message: `Not Enough Cakes! Only ${state.cakes} left!`,
        };
      } else {
        return {
          ...state,
          cakes: state.cakes - action.payload,
          message: undefined,
        };
      }

    case RESTOCK_CAKES:
      const numOfCakesToOrder = Number(action.payload);
      if (isNaN(numOfCakesToOrder)) {
        return {
          ...state,
          message: `Please enter a valid NUMBER of cakes!`,
        };
      } else {
        return {
          ...state,
          cakes: state.cakes + action.payload,
          message: undefined,
        };
      }
    default:
      return state;
  }
};

export default CakeReducer;
