export function ToyList({ toys }) {
  if (!toys) return <></>;
  return (
    <>
      {toys.map((toy) => (
        <p>{toy}</p>
      ))}
    </>
  );
}
