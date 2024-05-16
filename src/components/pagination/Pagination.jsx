import { useEffect, useState } from "react";

export default function Pagination({ total }) {
  const [test, setTest] = useState([]);

  useEffect(() => {
    // let arr = new Array(total);
    // arr.map((i) => console.log("hej"));
    // setTest(new Array(total));
    // console.log("test", test);
  }, []);

  return (
    <div>
      {test.map((i, index) => (
        <span>{index + 1}</span>
      ))}
    </div>
  );
}
