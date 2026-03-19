import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div id="parent">
    <div id="child">
      <h1 key="h1-1">I am h1 tag</h1>
      <h1 key="h1-2">I am h1 tag</h1>
    </div>
    <div id="child2">
      <h1 key="h1-3">I am heading child1</h1>
      <h2 key="h2-1">I am child heading2</h2>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)