export function ToyList({ toys }) {
  if (!toys) return <></>;
  return (
    <div className="toys-container">
      {toys.map((toy, idx) => (
        <article key={idx} className="toy-card">
          <p>name: {toy.name}</p>
          <p>price: {toy.price}</p>
          <p>labels: {toy.labels}</p>
          <p>inStock: {toy.inStock}</p>
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