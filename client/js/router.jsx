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

FlowRouter.route('/overview',{
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
FlowRouter.route('/inbox',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"inbox"} />});
    }
});
var nextRoutes = FlowRouter.group({
    prefix: '/next',
    name: 'next'
})
nextRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"next"} />});
    }
});
nextRoutes.route('/today',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"today"} />});
    }
});
nextRoutes.route('/thisweek',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"thisweek"} />});
    }
});
nextRoutes.route('/soon',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"soon"} />});
    }
});

FlowRouter.route('/focus',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"focus"} />});
    }
});

FlowRouter.route('/waitingfor',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"waiting for"} />});
    }
});
FlowRouter.route('/inbox',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"inbox"} />});
    }
});
var scheduledRoutes = FlowRouter.group({
    prefix: '/scheduled',
    name: 'scheduled'
})
scheduledRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"scheduled"} />});
    }
});
scheduledRoutes.route('/calendar',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"calendar"} />});
    }
});
scheduledRoutes.route('/reminders',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"reminders"} />});
    }
});
FlowRouter.route('/someday',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"someday"} />});
    }
});
var projectRoutes = FlowRouter.group({
    prefix: '/projects',
    name: 'projects'
})
projectRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"projects"} />});
    }
});
projectRoutes.route('/project/:id',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"project detail"} />});
    }
});


FlowRouter.route('/review',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"review"} />});
    }
});

var listsRoutes = FlowRouter.group({
    prefix: '/lists',
    name: 'lists'
})
listsRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"lists"} />});
    }
});
listsRoutes.route('/checklists',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"checklists"} />});
    }
});
listsRoutes.route('/reference',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"reference"} />});
    }
});
listsRoutes.route('/done',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"done"} />});
    }
});
listsRoutes.route('/trash',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"trash"} />});
    }
});
var contextsRoutes = FlowRouter.group({
    prefix: '/contexts',
    name: 'contexts'
})
contextsRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"contexts"} />});
    }
});
contextsRoutes.route('/roles',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"roles"} />});
    }
});
contextsRoutes.route('/contexts',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"contexts"} />});
    }
});
contextsRoutes.route('/flags',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"flags"} />});
    }
});
contextsRoutes.route('/delegates',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"delegates"} />});
    }
});

var settingsRoutes = FlowRouter.group({
    prefix: '/settings',
    name: 'settings'
})
settingsRoutes.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"settings"} />});
    }
});
settingsRoutes.route('/profile',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"profile"} />});
    }
});
settingsRoutes.route('/general',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content: <Container name={"general settings"} />});
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