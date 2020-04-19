import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Rashid" />
      <CommentDetail author="Shairah" />
      <CommentDetail author="Hamzah" />
      <CommentDetail author="Umar" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)