export default function Search({
  placeholder,
  type,
  value,
  setValue,
  setPage,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        setPage(1);
      }}
    ></input>
  );
}
