import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Rashid"
          timeAgo="Today at 6:02 AM"
          commentText={faker.lorem.words()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Shairah"
        timeAgo="Today at 5:23 AM"
        commentText={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Hamzah"
        timeAgo="Yesterday at 11.20 PM"
        commentText={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Umar"
        timeAgo="Yesterday at 9:55 PM"
        commentText={faker.lorem.words()}
        avatar={faker.image.avatar()}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)