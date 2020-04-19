import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar"/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Rashid
          </a>
          <div className="metadata">
            <span className="date">
              {new Date().toLocaleTimeString()}
            </span>
          </div>
          <div className="text">Now Playing: Maroon 5 - Sugar</div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)