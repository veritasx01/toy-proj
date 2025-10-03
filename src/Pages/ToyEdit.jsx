import { counterReducer } from "../utils/helpers";
import { useReducer } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToyPreview } from "../components/ToyPreview";
import { saveToy } from "../utils/toy-service";

export function ToyEdit() {
  const toyId = useParams("toyId").toyId;
  const toys = useSelector((state) => state.toyModule.toys);
  let index = toyId ? toys.findIndex((toy) => toy._id === toyId) : 0;
  const modulo = useSelector((state) => state.toyModule.toys.length);

  const [counter, countDispatch] = useReducer(counterReducer, {
    count: index % modulo,
    modulo: modulo,
  });

  const inc = () => countDispatch({ type: "incrementModulo" });
  const dec = () => countDispatch({ type: "decrementModulo" });

  const onFormSubmit = (formData) => {
    saveToy(formData);
  }

  return (
    <section className="main-view">
      <h1>{counter.count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <ToyPreview toy={toys[counter.count]} editable={true} onFormSubmit={onFormSubmit}/>
    </section>
  );
}
