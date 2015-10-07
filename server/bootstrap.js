// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Inbox.find().count() === 0) {
        var data = [
            {
                description: "Learn Meteor principles"
            },
            {
                description: "Remember the milk"

            },
            {
                description: "Think positive"
            }
        ];

        var timestamp = (new Date()).getTime();

        _.each(data, function(item) {
            var list_id = Inbox.insert({description: (item).description, createdAt: new Date(timestamp)
                });

            //_.each((item).items, function(text) {
            //    Todos.insert({listId: list_id,
            //        text: text,
            //        createdAt: new Date(timestamp)});
            //    timestamp += 1; // ensure unique timestamp.
            //});
        });
    }
});
