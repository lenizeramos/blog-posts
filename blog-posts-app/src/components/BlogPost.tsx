interface BlogPostProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  color: string;
}

function BlogPost({ post, color }: BlogPostProps) {
  return (
    <div className="card mb-4 shadow-sm" style={{ backgroundColor: color }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <small className="text-muted">Author id: {post.userId}</small>
      </div>
    </div>
  );
}

export default BlogPost;
