import "./Container.css";

const Container = ({ posts }) => {
  return (
    <div className="container">
      <h2>All Blog Posts</h2>
      <div className="images">
        {posts.map((post, index) => (
          <div className="card" key={index}>
            <img src={post.img} alt={post.title} />
            <p className="color">{post.title}</p>
            <div className="icon">
              <h3>{post.description}</h3>
              <img src={post.img1} alt={post.title} />
            </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
