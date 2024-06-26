import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const message = useSelector((state) => state.CakeReducer.message);

  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {message !== undefined && <p>{message}</p>}

      <button
        disabled={cakes < 1}
        onClick={() => {
          const askForNumOfCakes = prompt("How many cakes?");
          dispatch(buyCake(askForNumOfCakes));
        }}
      >
        Buy Cakes
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          const askForNumOfCakes = prompt("How many cakes?");
          dispatch(restockCakes(Number(askForNumOfCakes)));
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};
