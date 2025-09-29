import { ToyList } from "../components/ToyList";
import { ToyFilter } from "../components/ToyFilter";
import { useSelector } from "react-redux";
import { generateDummyToys } from "../utils/toy-service";
import { setToys } from "../store/store";

export function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys);

  return (
    <section className="toy-index">
      <button
        onClick={() => {
          const toys = generateDummyToys();
          setToys(toys);
        }}
      >generate toys
      </button>
      <ToyFilter />
      <ToyList toys={toys} />
    </section>
  );
}
