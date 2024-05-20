import { useEffect, useState } from "react";
import SinglePost from "../singlePost/SinglePost";
import Search from "../search/Search";
import Pag from "../pag/Pag";
import Limit from "../limit/Limit";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => getPosts(), [searchTerm, page, limit]);

  const getPosts = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}&_per_page=${limit}&_page=${page}`
    )
      .then((response) => {
        const pages = Math.ceil(response.headers.get("X-Total-Count") / limit);
        setTotalPages(pages);
        return response.json();
      })
      .then((json) => setPosts([...json]));
  };

  return (
    <div>
      <Search
        placeholder="Search by title"
        type="text"
        value={searchTerm}
        setValue={setSearchTerm}
        setPage={setPage}
      />
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {posts.map((post) => (
          <SinglePost post={post} key={post.id} />
        ))}
      </div>
      <Pag length={totalPages} setState={setPage} />
      {limit}
      <Limit setLimit={setLimit} />
    </div>
  );
}
