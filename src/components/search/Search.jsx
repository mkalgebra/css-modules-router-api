export default function Search({ placeholder, type, value, setValue }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}
