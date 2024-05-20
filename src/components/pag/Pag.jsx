export default function Pag({ length, setState }) {
  const numbers = Array.from({ length }, (_, index) => index + 1);

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {numbers.map((number) => (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "8px",
            padding: "4px",
            cursor: "pointer",
          }}
          key={number}
          onClick={() => setState(number)}
        >
          {number}
        </div>
      ))}
    </div>
  );
}
