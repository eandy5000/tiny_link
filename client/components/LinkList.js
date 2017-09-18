import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinkList extends Component {
    componentWillMount() {
        console.log(this.props.links)
    }

    render() {
        return <div>Link List</div>
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')

    return {
        links: Links.find({}).fetch() 
    }
}, LinkList)