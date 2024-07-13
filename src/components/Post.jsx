import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {post.title}
          <button
            className="btn btn-danger"
            aria-label="Delete post"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="tags">
            {post.tags.map((tag, index) => (
              <span
                key={`${post.id}-${tag}-${index}`}
                className="badge text-bg-primary hashtag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="alert alert-success reactions" role="alert">
          This post has {post.reactions?.likes || 0} likes and{" "}
          {post.reactions?.dislikes || 0} dislikes.
        </div>
      </div>
    </div>
  );
};

export default Post;
