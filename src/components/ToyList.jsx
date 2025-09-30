export function ToyList({ toys }) {
  if (!toys) return <></>;
  return (
    <div className="toys-container">
      {toys.map((toy, idx) => (
        <article key={idx} className="toy-card">
          <section>
            <p>name: {toy.name}</p>
            <p>price: {toy.price}$</p>
            <p>labels: {toy && toy.labels && toy.labels.join(", ")}</p>
            <p>inStock: {toy.inStock ? "yes" : "no"}</p>
          </section>
          <button
            onClick={() => console.log("TODO: implement reviews/messages")}
          >
            Add message
          </button>
        </article>
      ))}
    </div>
  );
}
/*
{ "_id": "vjYAOPJZ",
  "name": "name0",
  "price": 57,
  "labels": [ "Baby" ],
  "createdAt": 1759142497768,
  inStock": true }
*/
