import { counterReducer } from "../utils/helpers";
import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToyPreview } from "../components/ToyPreview";

export function ToyDetails() {
  const toyId = useParams("toyId").toyId;
  const toys = useSelector((state) => state.toyModule.toys);
  let index = toyId ? toys.findIndex((toy) => toy._id === toyId) : 0;
  const modulo = toys.length;

  const [counter, countDispatch] = useReducer(counterReducer, {
    count: index % modulo,
    modulo: modulo,
  });

  const inc = () => countDispatch({ type: "incrementModulo" });
  const dec = () => countDispatch({ type: "decrementModulo" });
  
  return (
    <section className="main-view">
      <h1>{counter.count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <ToyPreview toy={toys[counter.count]}/>
    </section>
  );
}
