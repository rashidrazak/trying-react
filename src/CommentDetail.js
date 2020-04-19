import React from 'react'
import faker from 'faker'

const CommentDetail = (props) => {
  const { author } = props

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={faker.image.avatar()} alt="avatar"/>
      </a>
      <div className="content">
        <a href="/" className="author">
          {  author }
        </a>
        <div className="metadata">
          <span className="date">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
        <div className="text">Now Playing: Maroon 5 - Sugar</div>
      </div>
    </div>
  )
}

export default CommentDetail