/* eslint-disable react/prop-types */
const Posts = ({ data }) => {
  const postsData = data ? data?.posts : [];

  const postsForPublishing = postsData.filter(
    (post) => post.status === "published"
  );

  const listItems = postsForPublishing.map((post) => 
    <li key={post.id}>
      <h4>{post.title}</h4>
      <article>{post.article}</article>
    </li>
  );

  return (
    <main className="posts-container">
      <ul>{listItems}</ul>
    </main>
  );
};

export default Posts;
