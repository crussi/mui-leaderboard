
//window.addEventListener('popstate', function(event)
//{
//    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
//});

FlowRouter.route('/',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {

        //if (Meteor.user()) {
        //    //FlowLayout.render('layout-auth', { content: "dashboard"});
        //    renderDashboard();
        //} else {
            //FlowLayout.render('layout-unauth', { header: "headerunauth", content: "content-mktg"});

        ReactLayout.render(SidebarApp, {content(){ return <Container name={"world"} />}});
        //}

    }
});

FlowRouter.route('/inbox',{
    subscriptions: function(params) {
        this.register('inboxItems', Meteor.subscribe('inbox'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"inbox"}><InboxList /></Container>});
        ReactLayout.render(SidebarApp, {content() {
            return <InboxList nextstep={nextstep} />;
        }});
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
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"next"} />}});
    }
});
nextRoutes.route('/today',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"today"} />}});
    }
});
nextRoutes.route('/thisweek',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"thisweek"} />}});
    }
});
nextRoutes.route('/soon',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"soon"} />}});
    }
});

FlowRouter.route('/focus',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"focus"} />}});
    }
});

FlowRouter.route('/waitingfor',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"waiting for"} />}});
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
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"scheduled"} />}});
    }
});
scheduledRoutes.route('/calendar',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"calendar"} />}});
    }
});
scheduledRoutes.route('/reminders',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"reminders"} />}});
    }
});
FlowRouter.route('/someday',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"someday"} />}});
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
        //ReactLayout.render(SidebarApp, {content: <Container name={"projects"} />, routestate: routestate[Routes.projects]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"projects"} />}});
    }
});
projectRoutes.route('/project/:id',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"project detail"} />, routestate: routestate[Routes.projects_1]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"project detail"} />}});
    }
});


FlowRouter.route('/review',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"review"} />, routestate: routestate[Routes.review]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"review"} />}});
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
        //ReactLayout.render(SidebarApp, {content: <Container name={"lists"} />, routestate: routestate[Routes.lists]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"lists"} />}});
    }
});
listsRoutes.route('/checklists',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"checklists"} />, routestate: routestate[Routes.lists_checklists]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"checklists"} />}});
    }
});
listsRoutes.route('/reference',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"reference"} />, routestate: routestate[Routes.lists_reference]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"reference"} />}});
    }
});
listsRoutes.route('/done',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"done"} />, routestate: routestate[Routes.lists_done]});
        ReactLayout.render(SidebarApp, {content: <Container name={"done"} />});
    }
});
listsRoutes.route('/trash',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"trash"} />, routestate: routestate[Routes.lists_trash]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"trash"} />}});
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
        //ReactLayout.render(SidebarApp, {content: <Container name={"contexts"} />, routestate: routestate[Routes.contexts]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"contexts"} />}});
    }
});
contextsRoutes.route('/roles',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"roles"} />, routestate: routestate[Routes.contexts_roles]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"roles"} />}});
    }
});
contextsRoutes.route('/contexts',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"contexts"} />, routestate: routestate[Routes.contexts_contexts]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"contexts"} />}});
    }
});
contextsRoutes.route('/flags',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"flags"} />, routestate: routestate[Routes.contexts_flags]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"flags"} />}});
    }
});
contextsRoutes.route('/delegates',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"delegates"} />, routestate: routestate[Routes.contexts_delegates]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"delegates"} />}});
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
        //ReactLayout.render(SidebarApp, {content: <Container name={"settings"} />, routestate: routestate[Routes.settings]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"settings"} />}});
    }
});
settingsRoutes.route('/profile',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"profile"} />, routestate: routestate[Routes.settings_profile]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"profile"} />}});
    }
});
settingsRoutes.route('/general',{
    subscriptions: function(params) {
        //this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        //ReactLayout.render(SidebarApp, {content: <Container name={"general settings"} />, routestate: routestate[Routes.settings_general]});
        ReactLayout.render(SidebarApp, {content(){ return <Container name={"general settings"} />}});
    }
});
//let x = <Container name={name}><Cheetah/></Container>;
//ReactLayout.render(SidebarApp, {content: x});
////ReactLayout.render(SidebarApp, {content: <Container content={"goodbye world"} />});

