function BlogPost({ title, date, body, image }) {
    return (
        <article className="blog-post">
            <h3>{title}</h3>
            <p className="blog-date">{date}</p>

            {body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            {image && <img className="blog-image" src={image} alt={title} />}
        </article>
    );
}

export default BlogPost;
