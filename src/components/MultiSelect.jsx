import { useState, useRef, useEffect } from "react";
import { debounce } from "../utils/helpers";

export function MultiSelect({ options, onStateChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const dropdownRef = useRef(null);

  // Toggle option selection
  const toggleOption = (value) => {
    setSelected((prev) => {
      const val = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      console.log(val);
      return val;
    });
  };

  const filterOptions = debounce((e) => {
    const lowerCaseval = e.target.value.toLowerCase();
    setFilteredOptions(
      options.filter((opt) => opt.toLowerCase().includes(lowerCaseval))
    );
  }, 10);

  useEffect(() => {
    onStateChange?.(selected);
  }, [selected, onStateChange]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative" }}>
      <input
        name="label-search"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            filterOptions(e);
          }
        }} 
        autoComplete="off"
        onChange={filterOptions}
      />
      <span
        onClick={() => setIsOpen(!isOpen)}
        className={isOpen ? "arrow left" : "arrow down"}
      />

      {isOpen && (
        <div className="dropdown">
          {filteredOptions.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
