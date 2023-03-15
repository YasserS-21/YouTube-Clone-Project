import { useState } from "react";

export default function CommentSection() {

    const [comment, setComment] = useState("");
    const [commenter, setCommenter] = useState("");
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, { commenter, comment }]);
        setComment("");
        setCommenter("");
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    const handleCommenterChange = (e) => {
        setCommenter(e.target.value);
    };

    return (
        <div className="comment-section">
            <form onSubmit={handleSubmit}>
                <h2>Add a comment</h2>
                <label htmlFor="comment">Comment:</label>
                <input
                    value={comment}
                    onChange={handleCommentChange}
                    type="text"
                    name="comment"
                    id="comment"
                />
                <label htmlFor="commenter">Commenter:</label>
                <input
                    value={commenter}
                    onChange={handleCommenterChange}
                    type="text"
                    name="commenter"
                    id="commenter"
                />
                <input type="submit" value="Submit" />
            </form>

            <div className="comment-list">
                {comments.length === 0 ? (
                    <p>No comments yet</p>
                ) : (
                    <ul>
                        {comments.map((comments, i) => (
                            <li key={i}>
                                {comments.comment} - <strong>{comments.commenter}</strong>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}