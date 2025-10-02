export function ToyPreview({toy}) {
  return <section>
    <p>name: {toy?.name}</p>
    <p>price: {toy?.price}$</p>
    <p>labels: {toy?.labels.join(", ")}</p>
    <p>inStock: {toy?.inStock ? "yes" : "no"}</p>
  </section>;
}
