import { useEffect, useState } from "react";
import SinglePost from "../singlePost/SinglePost";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => getPosts(), [searchTerm, page]);

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
      />
      <div>
        {posts.map((post) => (
          <SinglePost post={post} key={post.id} />
        ))}
      </div>
      <Pagination total={totalPages} />
    </div>
  );
}
