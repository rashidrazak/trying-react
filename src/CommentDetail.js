import React from 'react'

const CommentDetail = (props) => {
  const { author, timeAgo, commentText, avatar } = props

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={ avatar } alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {  author }
        </a>
        <div className="metadata">
          <span className="date">
            { timeAgo }
          </span>
        </div>
        <div className="text">{ commentText }</div>
      </div>
    </div>
  )
}

export default CommentDetail