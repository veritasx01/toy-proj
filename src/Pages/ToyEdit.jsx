import { counterReducer } from "../utils/helpers";
import { useReducer} from "react";
import { useSelector } from "react-redux";

export function ToyEdit({ index = 0 }) {
  const toys = useSelector((state) => state.toyModule.toys);
  const modulo = useSelector((state) => state.toyModule.toys.length);

  const [counter, countDispatch] = useReducer(counterReducer, {
    count: index % modulo,
    modulo: modulo,
  });

  const inc = () => countDispatch({ type: "incrementModulo" });
  const dec = () => countDispatch({ type: "decrementModulo" });

  return (
    <section>
      <h1>{counter.count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </section>
  );
}
