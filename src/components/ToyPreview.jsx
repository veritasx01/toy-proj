import { useEffect, useState } from "react";

export function ToyPreview({ toy, editable, onFormSubmit }) {
  const [formData, setFormData] = useState({...toy});

  const handleChange = (event) => {
    const { name, type } = event.target;
    let { value } = event.target;
    if (type === "number") {
      value = parseInt(value);
    }

    if (name === "inStock") {
      value = value === "yes";
    }

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(formData);
  }

  if (!editable) {
    return (
      <section>
        <p>name: {toy?.name}</p>
        <p>price: {toy?.price}$</p>
        <p>labels: {toy?.labels.join(", ")}</p>
        <p>inStock: {toy?.inStock ? "yes" : "no"}</p>
      </section>
    );
  }

  return (
    <section>
      <form className="vertical-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label>name: </label>
          <input
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row">
          <label>price: </label>
          <input
            type="number"
            name="price"
            value={formData?.price}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row">
          <label>labels: </label>
          <input
            type="text"
            name="labels"
            value={formData?.labels.join(", ")}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-row">
          <label>in stock: </label>
          <input
            type="text"
            name="inStock"
            value={formData?.inStock ? "yes" : "no"}
            onChange={handleChange}
          ></input>
        </div>
        <button>Confirm Changes?</button>
      </form>
    </section>
  );
}
