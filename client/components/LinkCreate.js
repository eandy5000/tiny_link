import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinkCreate extends Component {
    render() {
        console.log('link create ',this.props.links)
        return (
            <div>Link Create</div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')

    return {
        links: Links.find({}).fetch()
    }
}, LinkCreate)