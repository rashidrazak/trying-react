import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      <p>Rashid Razak was here!</p>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>He's Awesome!</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)