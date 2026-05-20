import { useState } from "react";
import { Calendar, Clock, ThumbsUp, MessageSquare, Send } from "lucide-react";

// Assuming these custom colors are configured in your tailwind.config.js
// If not, replace classes like bg-muted-beige with bg-[#d9cfc7]

function BlogDetailsPage() {
  // State for Blog Likes
  const [blogLikes, setBlogLikes] = useState(10);
  const [hasLikedBlog, setHasLikedBlog] = useState(false);

  // State for Comments Input & List
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Jane Smith",
      initials: "JS",
      date: "Just now",
      text: "This is an incredibly well-written piece. The budgeting tips mentioned here are highly practical for anyone starting out!",
      likes: 4,
      hasLiked: false,
    },
    {
      id: 2,
      author: "Alex Carter",
      initials: "AC",
      date: "2 hours ago",
      text: "Great insights on managing finance! Looking forward to the next update.",
      likes: 2,
      hasLiked: false,
    },
  ]);

  const handleBlogLike = () => {
    setBlogLikes((prev) => (hasLikedBlog ? prev - 1 : prev + 1));
    setHasLikedBlog(!hasLikedBlog);
  };

  const handleCommentLike = (id) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: comment.hasLiked ? comment.likes - 1 : comment.likes + 1,
              hasLiked: !comment.hasLiked,
            }
          : comment,
      ),
    );
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;

    const newComment = {
      id: Date.now(),
      author: "Guest User",
      initials: "GU",
      date: "Just now",
      text: commentInput.trim(),
      likes: 0,
      hasLiked: false,
    };

    setComments([newComment, ...comments]);
    setCommentInput("");
  };

  return (
    <div className="container-v2 mt-28 pb-24 max-w-4xl mx-auto px-4 md:px-6">
      {/* Category */}
      <div className="py-1.5 px-3.5 rounded-full w-fit bg-muted-beige/40 border border-muted-beige/60 transition-all">
        <span className="text-[11px] font-bold text-[#a97e60] tracking-widest uppercase">
          Personal Finance
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-neutral-800 leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        aliquid?
      </h1>

      {/* Creator & Blog Details Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-y border-muted-beige mt-8 gap-4 bg-muted-beige/10 px-4 rounded-xl">
        <div className="flex items-center gap-3">
          {/* Profile Circle */}
          <div className="bg-muted-beige text-[#a97e60] rounded-full w-12 h-12 grid place-items-center text-base font-bold shadow-sm ring-2 ring-light-beige/30">
            JD
          </div>
          <div>
            <h5 className="text-base font-semibold text-neutral-700 leading-tight">
              John Doe
            </h5>
            <p className="text-xs text-neutral-400 mt-0.5">
              john.doe@example.com
            </p>
          </div>
        </div>

        {/* Metadata Badges */}
        <div className="flex items-center gap-4 text-neutral-600 self-end sm:self-auto">
          <div className="flex items-center gap-1.5 bg-white/50 px-2.5 py-1 rounded-md border border-muted-beige/40">
            <Calendar size={15} strokeWidth={2} className="text-[#a97e60]" />
            <span className="text-xs font-medium text-neutral-600">
              22/10/2010
            </span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/50 px-2.5 py-1 rounded-md border border-muted-beige/40">
            <Clock size={15} strokeWidth={2} className="text-[#a97e60]" />
            <span className="text-xs font-medium text-neutral-600">22:30</span>
          </div>
          <button
            onClick={handleBlogLike}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md border transition-all duration-200 active:scale-95 ${
              hasLikedBlog
                ? "bg-[#a97e60] text-white border-[#a97e60]"
                : "bg-white/50 text-neutral-600 border-muted-beige/40 hover:border-light-beige"
            }`}
          >
            <ThumbsUp
              size={15}
              strokeWidth={2}
              className={hasLikedBlog ? "text-white" : "text-[#a97e60]"}
            />
            <span className="text-xs font-bold">{blogLikes}</span>
          </button>
        </div>
      </div>

      {/* Main Content Body */}
      <article className="mt-8 text-neutral-600 text-base md:text-lg leading-relaxed space-y-6 max-w-none">
        <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#a97e60] first-letter:mr-2 first-letter:float-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui labore,
          facilis eveniet quis excepturi perferendis, delectus nobis hic rerum
          sed vero tempore iusto natus, tenetur accusantium corporis quas
          ratione officiis! Distinctio quia ab, rerum laudantium recusandae,
          neque in voluptatum quo consequuntur unde asperiores, assumenda
          nesciunt nisi nostrum harum est sint adipisci placeat aspernatur
          dolore minus veritatis ducimus.
        </p>
        <p>
          Reprehenderit iste dicta quo omnis iusto aut odit laborum, earum
          perferendis pariatur. Ipsum nesciunt, consequuntur cumque quidem cum
          repellendus? Sequi natus minima ipsam atque ut modi hic voluptate
          eaque qui dolor laudantium quam dicta possimus veritatis illum
          architecto iusto, esse officia facilis necessitatibus.
        </p>
      </article>

      {/* Section Divider */}
      <div className="h-px w-full my-12 bg-muted-beige" />

      {/* --- Comment Section --- */}
      <section className="space-y-8">
        <div className="flex items-center gap-2">
          <MessageSquare size={22} className="text-[#a97e60]" />
          <h2 className="text-xl font-bold text-neutral-800">
            Discussion ({comments.length})
          </h2>
        </div>

        {/* New Comment Submission Box */}
        <form onSubmit={handlePostComment} className="flex gap-3 items-start">
          <div className="hidden sm:grid bg-muted-beige text-[#a97e60] rounded-full w-10 h-10 place-items-center text-sm font-bold shadow-inner shrink-0">
            GU
          </div>
          <div className="flex-1 relative border border-muted-beige focus-within:border-light-beige rounded-xl bg-white/40 overflow-hidden transition-all duration-200">
            <textarea
              rows="3"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Share your thoughts on this article..."
              className="w-full bg-transparent p-4 text-sm text-neutral-700 placeholder-neutral-400 focus:outline-none resize-none"
            />
            <div className="flex justify-end p-2 bg-muted-beige/10 border-t border-muted-beige/40">
              <button
                type="submit"
                disabled={!commentInput.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-[#a97e60] hover:bg-[#a97e60]/90 text-white disabled:opacity-40 disabled:hover:bg-[#a97e60] font-medium text-xs rounded-lg shadow-sm transition-all"
              >
                <Send size={12} />
                <span>Comment</span>
              </button>
            </div>
          </div>
        </form>

        {/* Existing Comments Dynamic List */}
        <div className="space-y-4 mt-6">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex gap-3 items-start p-4 rounded-xl border border-muted-beige/60 bg-white/30 backdrop-blur-xs transition-all hover:bg-white/50"
            >
              {/* Commenter Avatar */}
              <div className="bg-muted-beige/70 text-[#a97e60] rounded-full w-9 h-9 grid place-items-center text-xs font-bold shrink-0">
                {comment.initials}
              </div>

              {/* Comment Content Block */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-700">
                    {comment.author}
                  </span>
                  <span className="text-[11px] text-neutral-400">
                    {comment.date}
                  </span>
                </div>
                <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                  {comment.text}
                </p>

                {/* Action Toolbar */}
                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() => handleCommentLike(comment.id)}
                    className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                      comment.hasLiked
                        ? "text-[#a97e60]"
                        : "text-neutral-400 hover:text-neutral-600"
                    }`}
                  >
                    <ThumbsUp
                      size={13}
                      className={comment.hasLiked ? "fill-current" : ""}
                    />
                    <span>
                      {comment.likes} {comment.likes === 1 ? "Like" : "Likes"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogDetailsPage;
