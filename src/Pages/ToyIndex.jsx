import { ToyList } from "../components/ToyList";
import { ToyFilter } from "../components/ToyFilter";
import { useSelector } from "react-redux";
import { generateDummyToys, queryToys } from "../utils/toy-service";
import { setToys } from "../store/actions/toy-actions";
import { createCookieSessionStorage } from "react-router-dom";

export function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys);

  const onSetFilter = async (filterBy) => {
    const ftoys = await queryToys(filterBy);
    setToys(ftoys);
  }

  return (
    <section className="toy-index">
      <button
        onClick={() => {
          const toys = generateDummyToys();
          setToys(toys);
        }}
      >generate toys
      </button>
      <ToyFilter onSetFilter={onSetFilter}/>
      <ToyList toys={toys} />
    </section>
  );
}
