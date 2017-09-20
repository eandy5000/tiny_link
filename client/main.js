import React from 'react'
import ReactDOM from 'react-dom'
import { Links } from '../imports/collections/links'

//components
import HeaderComponent from './components/HeaderComponent'
import LinkList from './components/LinkList'
import LinkCreate from './components/LinkCreate'

const App = () => {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <LinkCreate />
        <LinkList />
      </div>
    </div>
  )
}

Meteor.startup(() => {

  ReactDOM.render(<App />, document.querySelector('.root'))

})
