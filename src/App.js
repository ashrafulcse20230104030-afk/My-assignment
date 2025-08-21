import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Author Name",
      date: "10 February 2025",
      text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      likes: 12,
      dislikes: 1,
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const reactions = [
    { name: "Like", percent: 20 },
    { name: "Love", percent: 60 },
    { name: "Angry", percent: 5 },
    { name: "Sad", percent: 5 },
  ];

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: "New User",
        date: new Date().toDateString(),
        text: newComment,
        likes: 0,
        dislikes: 0,
        replies: [],
      },
    ]);
    setNewComment("");
  };

  return (
    <div className="container">
      {/* Breadcrumb */}
      <p className="breadcrumb">
        <a href="#">Section</a> &gt; <a href="#">Sub-section</a>
      </p>

      {/* Title */}
      <h1 className="title">
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
      </h1>
      <p className="subtitle">
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
      </p>

      {/* Image */}
      <div className="image-box"></div>

      {/* Author */}
      <div className="author">
        <div className="avatar"></div>
        <p>Author Name • 7 January 2025</p>
      </div>

      {/* Body */}
      <p className="body-text">
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
        Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
      </p>

      {/* Reactions */}
      <div className="reactions">
        {reactions.map((r, i) => (
          <div key={i} className="reaction">
            <span>{r.name}</span>
            <p>{r.percent}%</p>
          </div>
        ))}
      </div>

      {/* Comments */}
      <div className="comments">
        <h2>20 Comments</h2>

        {/* Input */}
        <div className="comment-input">
          <input
            type="text"
            placeholder="Write your comment.."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>→</button>
        </div>

        {/* Comment List */}
        {comments.map((c) => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <div className="avatar small"></div>
              <p className="comment-author">
                {c.author}, {c.date}
              </p>
            </div>
            <p className="comment-text">{c.text}</p>
            <div className="comment-actions">
              <span>Like {c.likes}</span>
              <span>Dislike {c.dislikes}</span>
              <button className="reply-btn">Reply</button>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
}
