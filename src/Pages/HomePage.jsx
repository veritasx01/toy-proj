import { generateDummyToys } from "../utils/toy-service";
import { setToys } from "../store/store";

export function HomePage() {
  return (
    <>
      <h1>home page placeholder</h1>
      <button
        onClick={() => {
          const toys = generateDummyToys();
          console.log(toys);
        }}
      ></button>
    </>
  );
}
