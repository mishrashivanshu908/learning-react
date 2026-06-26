import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Name from './myscript.jsx'

const anotherElement = (
  <>
    <h1>Hello World!</h1>
    <a href="https://google.com" target="_blank">
      Visit
    </a>
  </>
)
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  '   click me to visit google'

)
const reactElement2 = React.createElement(
  'a',
  { href: 'https://facebook.com', target: '_blank' },
  'click me to visit facebook',
  reactElement
)

createRoot(document.getElementById('root')).render(
  <App/>
)
