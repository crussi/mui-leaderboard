FlowRouter.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log("route /");
        //if (Meteor.user()) {
        //    //FlowLayout.render('layout-auth', { content: "dashboard"});
        //    renderDashboard();
        //} else {
            //FlowLayout.render('layout-unauth', { header: "headerunauth", content: "content-mktg"});
            ReactLayout.render(SidebarApp, {content: <WelcomeComponent name={"world"} />});

        //}

    }
});