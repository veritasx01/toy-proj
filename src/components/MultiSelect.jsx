import { useState } from "react";

export function MultiSelect({ options = ["apple", "orange", "banana"] }) {
  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelected(values);
  };

  const toggle = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <select multiple value={selected} onChange={handleChange}>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            onMouseDown={(e) => {
              e.preventDefault(); 
              toggle(opt);
            }}
          >
            {opt}
          </option>
        ))}
      </select>
      <p>Selected: {selected.join(", ")}</p>
    </div>
  );
}
