Routes = {
    root : "/",
    inbox : "/inbox",
    next : "/next",
    next_today : "/next/today",
    next_thisweek : "/next/thisweek",
    next_soon : "/next/soon",
    focus : "/focus",
    waitingfor : "/waitingfor",
    scheduled : "/scheduled",
    scheduled_calendar : "/scheduled/calendar",
    scheduled_reminders : "/scheduled/reminders",
    someday : "/someday",
    projects : "/projects",
    project_1 : "/project/1",
    project_2 : "/project/2",
    project_3 : "/project/3",
    review : "/review",
    lists : "/lists",
    lists_checklists : "/lists/checklists",
    lists_reference : "/lists/reference",
    lists_done : "/lists/done",
    lists_trash : "/lists/trash",
    contexts : "/contexts",
    contexts_roles : "/contexts/roles",
    contexts_contexts : "/contexts/contexts",
    contexts_flags : "/contexts/flags",
    contexts_delegates : "/contexts/delegates",
    settings : "/settings",
    settings_profile : "/settings/profile",
    settings_general : "/settings/general"
}


const inbox = {
    id: "FDDp1ru10UCxl2Xnv2NT2Q",
    name: "Inbox",
    icon: "inbox",
    color: "blue",
    route: Routes.inbox
};
const today = {
    id: "bFolGPm9ikShWzx76mq0GQ",
    name: "Today",
    icon: "calendar",
    color: "green",
    route: Routes.next_today
};
const thisweek = {
    id: "_dy3uCTWF0qsWqELiinqFg",
    name: "This Week",
    icon: "calendar-note",
    color: "green",
    route: Routes.next_thisweek
};
const soon = {
    id: "w7mtxGN6Vkycw0pzuc7nHw",
    name: "Soon",
    icon: "calendar-check",
    color: "green",
    route: Routes.next_soon
};
const next = {
    id: "I10ifHO0PEGrSxI_nNi-ag",
    name: "Next",
    icon: "check-square",
    color: "green",
    route: Routes.next,
    children: [today,thisweek,soon]
};
const focus = {
    id: "fFrT8jnMA0W0iqLa8iLeNw",
    name: "Focus",
    icon: "star",
    color: "red",
    route: Routes.focus
};
const waitingfor = {
    id: "qvyAi6BwzUefiROWuco38g",
    name: "Waiting for",
    icon: "account-box",
    color: "orange",
    route: Routes.waitingfor
};
const calendar = {
    id: "kvIGBCUWZkuzp86JaHye4A",
    name: "Calendar",
    icon: "calendar",
    color: "cyan",
    route: Routes.scheduled_calendar
};
const reminders = {
    id: "XueTfO9q9EuzgzsMcjI1oA",
    name: "Reminders",
    icon: "notifications",
    color: "cyan",
    route: Routes.scheduled_reminders
};
const scheduled = {
    id: "ELm2BGNyHkCGsEzL5hp_JQ",
    name: "Scheduled",
    icon: "time",
    color: "cyan",
    route: Routes.scheduled,
    children: [calendar,reminders]
};
const someday = {
    id: "Jldp4JOaD0Oa3W1eOe17ug",
    name: "Someday",
    icon: "pause",
    color: "purple",
    route: Routes.someday
};
const project1 = {
    id: "7EHOtAYARkG0c43qsDH5cQ",
    name: "Project 1",
    icon: "assignment",
    color: "pink",
    route: Routes.projects_1
};
const project2 = {
    id: "0dCP51BWpEuPWDLiWVKQOQ",
    name: "Project 2",
    icon: "assignment",
    color: "pink",
    route: Routes.projects_2
};
const project3 = {
    id: "C_xUMSgdpEuS4Yt1XlO-XQ",
    name: "Project 3",
    icon: "assignment",
    color: "pink",
    route: Routes.projects_3
};
const projects = {
    id: "UeWFiTObrEGrl88O9woGtA",
    name: "Projects",
    icon: "assignment-o",
    color: "pink",
    route: Routes.projects,
    children: [project1,project1,project3]
};
const review = {
    id: "IsYuh58UnkyUYZKU0TcGXw",
    name: "Review",
    icon: "local-cafe",
    color: "brown",
    route: Routes.review
};
const checklists = {
    id: "uP4uSZ3m9U_bDloeUpDcYw",
    name: "Checklists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: Routes.lists_checklists
};
const reference = {
    id: "f4NkhuA_PkGyRi7yZIx0Qg",
    name: "Reference",
    icon: "book",
    color: "deep-purple",
    route: Routes.lists_reference
};
const done = {
    id: "3Jrjgc86U0m6afkizxB2SA",
    name: "Done",
    icon: "archive",
    color: "deep-purple",
    route: Routes.lists_done
};
const trash = {
    id: "pSzvcNe3T0q5fwcB2kDUtQ",
    name: "Trash",
    icon: "delete",
    color: "deep-purple",
    route: Routes.lists_trash
};
const lists = {
    id: "ZABTfpmKh0KSbeN7QwKd3Q",
    name: "Lists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: Routes.lists,
    children: [checklists,reference,done,trash]
};
const roles = {
    id: "RFhgTTkk0Ey3kg_xSpwD8w",
    name: "Roles",
    icon: "local-offer",
    color: "teal",
    route: Routes.contexts_roles
};
const contexts = {
    id: "QXFQzrUDCUC_kfWP9zSPDg",
    name: "Contexts ",
    icon: "pin",
    color: "teal",
    route: Routes.contexts_contexts
};
const flags = {
    id: "0w0JGgMyX0e0YWm583VwOQ",
    name: "Flags ",
    icon: "flag",
    color: "teal",
    route: Routes.contexts_flags
};
const delegates = {
    id: "QcRkScJUWkesxZ3Wn-ZT_Q",
    name: "Delegates ",
    icon: "account-box",
    color: "teal",
    route: Routes.contexts_delegates
};
const contexttypes = {
    id: "TuVm9HPakUeoCI2e7XLXPA",
    name: "Contexts",
    icon: "pin",
    color: "teal",
    route: Routes.contexts,
    children: [roles,contexts,flags,delegates]
};
const profile = {
    id: "H-IuJIo9Vkif4JZRKqUd-Q",
    name: "Profile ",
    icon: "account-circle",
    color: "indigo",
    route: Routes.settings_profile
};
const general = {
    id: "XcWlwKAXUUS-R-GHN6Ugfg",
    name: "General ",
    icon: "settings",
    color: "indigo",
    route: Routes.settings_general
};
const settings = {
    id: "lMsxrLlF2Eq6PHgxX2_jkw",
    name: "Settings",
    icon: "settings",
    color: "indigo",
    route: Routes.settings,
    children: [profile,general]
}
menudata = [
    inbox,
    next,
    focus,
    waitingfor,
    scheduled,
    someday,
    projects,
    review,
    lists,
    contexttypes,
    settings
];
//roles,contexts,flags,delegates
routestate = {
    [Routes.root] :[[],[]],
    [Routes.inbox]:[[],[inbox]],
    [Routes.next]:[[1],[next]],
    [Routes.next_today]:[[1],[next,today]],
    [Routes.next_thisweek]:[[1],[next,thisweek]],
    [Routes.next_soon]:[[1],[next,soon]],
    [Routes.focus]:[[],[focus]],
    [Routes.waitingfor]:[[],[waitingfor]],
    [Routes.scheduled]:[[4],[scheduled]],
    [Routes.scheduled_calendar]:[[4],[scheduled,calendar]],
    [Routes.scheduled_reminders]:[[4],[scheduled,reminders]],
    [Routes.someday]:[[],[someday]],
    [Routes.projects]:[[6],[projects]],
    [Routes.projects_project_1]:[[6],[projects,project1]],
    [Routes.projects_project_2]:[[6],[projects,project2]],
    [Routes.projects_project_3]:[[6],[projects,project3]],
    [Routes.review]:[[],[review]],
    [Routes.lists]:[[8],[lists]],
    [Routes.lists_checklists]:[[8],[lists,checklists]],
    [Routes.lists_reference]:[[8],[lists,reference]],
    [Routes.lists_done]:[[8],[lists,done]],
    [Routes.lists_trash]:[[8],[lists,trash]],
    [Routes.contexts]:[[9],[contexttypes]],
    [Routes.contexts_roles]:[[9],[contexttypes,roles]],
    [Routes.contexts_contexts]:[[9],[contexttypes,contexts]],
    [Routes.contexts_flags]:[[9],[contexttypes,flags]],
    [Routes.contexts_delegates]:[[9],[contexttypes,delegates]],
    [Routes.settings]:[[10],[settings]],
    [Routes.settings_profile]:[[10],[settings,profile]],
    [Routes.settings_general]:[[10],[settings,general]]
};

console.log('routestate: ' + routestate["/inbox"][1][0].name);
//var path = [];
//var selected = [];
//var lookup = {};

//path.push(0);
//selected.push('abc');//lookup["/inbox"] = [path, selected];
//lookup["two"] = "Second";
//lookup["three"] = "Third";

//var lookup = {
//    "/inbox": inbox,
//    "two": "second",
//    "three": "third"
//};


//console.log(lookup["/inbox"]);
//console.log(lookup["two"]);
//console.log(lookup["three"]);
console.log("hello");
//console.log(data[0]);
//console.log(data[1]);
//console.log(routestate['/inbox']);

