import React from 'react'
import ReactDOM from 'react-dom'
//components
import HeaderComponent from './components/HeaderComponent'
import LinkList from './components/LinkList'
import LinkCreate from './components/LinkCreate'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <LinkCreate />
      <LinkList />
    </div>
  )
}

Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.root'))

})
