import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinkCreate extends Component {
    constructor(props) {
        super(props)

        this.state ={
            error: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        
        Meteor.call('links.insert', this.refs.input.value, error => {
            if (error) {
                this.setState({error: 'invalid url'})
            }
            else {
                this.setState({error: ''})
                this.refs.input.value = ""
            }
        })

        
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Link to Shorten:</label>
                        <input className="form-control" ref="input" />
                    </div>
                    <div className="text-danger bg-danger">{this.state.error}</div>
                    <button type="submit" className="btn btn-primary">Shorten!</button>
                </form> 
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')

    return {
        links: Links.find({}).fetch()
    }
}, LinkCreate)