import { useNavigate } from "react-router-dom";
import { ToyPreview } from "./ToyPreview";

export function ToyList({ toys }) {
  const navigate = useNavigate();
  if (!toys) return <></>;
  return (
    <div className="toys-container">
      {toys.map((toy, idx) => (
        <article key={idx} className="toy-card">
          <ToyPreview toy={toy} />
          <button
            onClick={() => console.log("TODO: implement reviews/messages")}
          >
            Add message
          </button>
          <button onClick={() => navigate(`/details/${toy._id}`)}>
            View details
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
