Meteor.publish('inbox', function() {

    return Inbox.find();
});