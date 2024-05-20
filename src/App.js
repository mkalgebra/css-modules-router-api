import { useState } from "react";
import styles from "./App.module.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "12345") {
      navigate("/posts");
    } else {
      alert("Wrong data");
    }
  };

  return (
    <div className={styles["login-page"]}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.card}>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value={"Login"}></input>
      </form>
    </div>
  );
}

export default App;
