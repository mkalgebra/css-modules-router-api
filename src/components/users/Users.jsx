import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUsers();
  }, [searchTerm]);

  const getUsers = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?username_like=${searchTerm}`
    )
      .then((response) => response.json())
      .then((json) => setUsers([...json]));
  };

  return (
    <div>
      <input
        placeholder="Search by username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
      ></input>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
