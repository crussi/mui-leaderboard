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
            ReactLayout.render(SidebarApp, {content: <Container name={"world"} />});

        //}

    }
});

//let x = <Container name={name}><Cheetah/></Container>;
//ReactLayout.render(SidebarApp, {content: x});
////ReactLayout.render(SidebarApp, {content: <Container content={"goodbye world"} />});

FlowRouter.route('/Cheetah',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log("route /Cheetah");
        //if (Meteor.user()) {
        //    //FlowLayout.render('layout-auth', { content: "dashboard"});
        //    renderDashboard();
        //} else {
        //FlowLayout.render('layout-unauth', { header: "headerunauth", content: "content-mktg"});
        ReactLayout.render(SidebarApp, {content: <Container name={"Cheetah"}><Cheetah/></Container>});

        //}

    }
});

FlowRouter.route('/Ant',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log("route /Ant");
        //if (Meteor.user()) {
        //    //FlowLayout.render('layout-auth', { content: "dashboard"});
        //    renderDashboard();
        //} else {
        //FlowLayout.render('layout-unauth', { header: "headerunauth", content: "content-mktg"});
        ReactLayout.render(SidebarApp, {content: <Container name={"Ant"}><Ant/></Container>});

        //}

    }
});

FlowRouter.route('/Eagle',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log("route /Eagle");
        //if (Meteor.user()) {
        //    //FlowLayout.render('layout-auth', { content: "dashboard"});
        //    renderDashboard();
        //} else {
        //FlowLayout.render('layout-unauth', { header: "headerunauth", content: "content-mktg"});
        ReactLayout.render(SidebarApp, {content: <Container name={"Eagle"}><Eagle/></Container>});

        //}

    }
});
"CZ/vx?X/*≥c/vf,a;'dsa;*/"