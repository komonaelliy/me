interface PostCardProps {
    date: string;
    category: string;
    title: string;
    preview: string;
    tags: string[];
    link: string;
  }
  
  export default function PostCard({ date, category, title, preview, tags, link }: PostCardProps) {
    return (
      <article className="post-card" onClick={() => window.location.href = link}>
        <div className="post-header">
          <span className="date">{date}</span>
          <span className="category">{category}</span>
        </div>
        <h3 className="post-title">{title}</h3>
        <div className="post-preview">
          <p>{preview}</p>
        </div>
        <div className="post-tags">
          {tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </article>
    );
  }
  