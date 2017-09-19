import {Mongo} from 'meteor/mongo'
import validURL from 'valid-url'
import {check, Match} from 'meteor/check'

Meteor.methods({
    'links.insert': function(url) {
        check(url, Match.Where( url => validURL.isUri(url) ))
    }
})

export const Links = new Mongo.Collection('links')


