import { ToyList } from "../components/ToyList";
import { ToyFilter } from "../components/ToyFilter";
import { useSelector } from "react-redux";
import { createToys, generateDummyToys, queryToys } from "../utils/toy-service";
import { setToys } from "../store/actions/toy-actions";
import { createCookieSessionStorage } from "react-router-dom";

export function ToyIndex() {
  const toys = useSelector((state) => state.toyModule.toys);

  const onSetFilter = async (filterBy) => {
    const ftoys = await queryToys(filterBy);
    setToys(ftoys);
  }

  return (
    <section className="main-view">
      <button
        onClick={() => {
          const toys = createToys(5, true);
          setToys(toys);
        }}
      >generate toys
      </button>
      <ToyFilter onSetFilter={onSetFilter}/>
      <ToyList toys={toys} />
    </section>
  );
}
