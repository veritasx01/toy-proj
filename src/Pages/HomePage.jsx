import { generateDummyToys } from "../utils/toy-service.js";

export function HomePage() {
  return (
    <>
      <h1>home page placeholder</h1>
      <button onClick={() => console.log(generateDummyToys())}></button>
    </>
  );
}
