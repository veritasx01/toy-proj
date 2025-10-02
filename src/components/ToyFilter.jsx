import { useEffect, useState } from "react";

export function ToyFilter() {
  const [filterBy, setFilterBy] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilterBy((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const onFilterSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(filterBy);
  }, [filterBy]);

  return (
    <form onSubmit={onFilterSubmit}>
      <div className="form-col">
        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      {/* add min max range comp for price */}
      <div className="form-col">
        <label>Min price</label>
        <input type="number" name="minPrice" onChange={handleChange}></input>
      </div>
      <div className="form-col">
        <label>Max price</label>
        <input type="number" name="maxPrice" onChange={handleChange}></input>
      </div>
      <div className="form-col">
        <label>Is in stock</label>
        <input type="checkbox" name="isInStock" onChange={handleChange} />
      </div>
      <button>Filter</button>
    </form>
  );
}
