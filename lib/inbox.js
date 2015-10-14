Inbox = new Mongo.Collection('inbox');

Meteor.methods({
    '/inbox/delete': function (id) {
        var inbox = Inbox.findOne(id);
        Inbox.remove(id);
    },
    '/inbox/setDescription': function (id, description) {
        console.log('todos/setText: newText: ' + description);
        Inbox.update(id, {$set: {description: description}});
    },
    '/inbox/addNew': function (description) {
        var timestamp = (new Date()).getTime();
        var now = new Date(timestamp);
        console.log('inbox addNew');
        Inbox.insert({
            description: description,
            dateCreated: now
        });
    }
});
