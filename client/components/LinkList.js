import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinkList extends Component {
    renderList() {
        const {links} = this.props
        return links.map(link => {
            return (
                <div key={link._id} className='well'>
                    <p>Link: {link.url}</p>
                    <p>Short Link: <a href={"http://localhost:3000/"+link.token}>http://localhost:3000/{link.token}</a></p>
                    <p>Clicks: {link.count}</p>                
                </div>
            )
        })
    }
    
    render() {

        return (
            <div>
                Link List
                {this.renderList()}
            </div>
            )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')

    return {
        links: Links.find({}).fetch() 
    }
}, LinkList)