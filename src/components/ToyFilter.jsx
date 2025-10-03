import { useEffect, useState } from "react";

export function ToyFilter({ onSetFilter }) {
  const [filterBy, setFilterBy] = useState({});

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

  const onFilterSubmit = (event) => {
    event.preventDefault();
    onSetFilter(filterBy);
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
      <button>Filter</button>
    </form>
  );
}
