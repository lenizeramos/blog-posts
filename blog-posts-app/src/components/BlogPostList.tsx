import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function BlogPostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const colors = [
    "#FFB6C1",
    "#FFD700",
    "#ADD8E6",
    "#90EE90",
    "#FFA07A",
    "#E6E6FA",
    "#FFFACD",
  ];

  useEffect(() => {
    const fectchAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
    fectchAPI();
  }, []);

  if (loading) return <div className="text-center">Loading posts...</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Blog Posts</h1>
      <div className="row">
        {posts.map((post) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div className="col-md-4" key={post.id}>
              <BlogPost post={post} color={randomColor} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPostList;
