import { useEffect, useState, useRef, useCallback } from "react";
import { debounce } from "../utils/helpers";
import { MultiSelect } from "./MultiSelect";
import { labels } from "../utils/toy-service";

export function ToyFilter({ onSetFilter }) {
  const [filterBy, setFilterBy] = useState({});
  const delay = 100;
  const delayedCall = useRef(debounce(onSetFilter, delay));

  useEffect(() => {
    delayedCall.current = debounce(onSetFilter, delay);
    return () => {
      // cancel pending timeout on unmount
      delayedCall.current.cancel?.();
    };
  }, [onSetFilter]);

  const handleChange = (event) => {
    const { name, type } = event.target;
    let { value } = event.target;

    if (type === "number") {
      value = parseInt(value);
    }

    setFilterBy((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const addLabels = useCallback((labels) => {
    setFilterBy((prev) => ({ ...prev, labels }));
  }, []);

  const onFilterSubmit = (event) => {
    event.preventDefault();
    delayedCall.current(filterBy);
  };

  useEffect(() => {
    console.log(filterBy);
  }, [filterBy]);

  return (
    <form className="vertical-form" onSubmit={onFilterSubmit}>
      <div className="form-row">
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Min price</label>
        <input
          type="number"
          name="minPrice"
          max={filterBy.maxPrice || Infinity}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-row">
        <label>Max price</label>
        <input
          type="number"
          name="maxPrice"
          min={filterBy.minPrice || 0}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-row">
        <label>Is in stock</label>
        <select name="inStock" onChange={handleChange}>
          <option value={"any"}>Any</option>
          <option value={"in-stock"}>In Stock</option>
          <option value={"not-in-stock"}>Not in Stock</option>
        </select>
      </div>
      <div className="form-row">
        <label>Labels</label>
        <MultiSelect options={labels} onStateChange={addLabels}></MultiSelect>
      </div>
      <button>Filter</button>
    </form>
  );
}
