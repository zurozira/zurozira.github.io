import posts from "../data/posts";
import BlogPost from "./BlogPost";

function Blog() {
    return (
        <section id="blog" className="blog-section">
            <h2 className="coralText">my_blog</h2>

            <div className="blog-list">
                {posts.map((post) => (
                    <BlogPost key={post.title} {...post} />
                ))}
            </div>
        </section>
    );
}

export default Blog;
