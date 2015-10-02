const inbox = {
    id: "FDDp1ru10UCxl2Xnv2NT2Q",
    name: "Inbox",
    icon: "inbox",
    color: "blue",
    route: "/inbox"
};
const today = {
    id: "bFolGPm9ikShWzx76mq0GQ",
    name: "Today",
    icon: "calendar",
    color: "green",
    route: "/next/today"
};
const thisweek = {
    id: "_dy3uCTWF0qsWqELiinqFg",
    name: "This Week",
    icon: "calendar-note",
    color: "green",
    route: "/next/thisweek"
};
const soon = {
    id: "w7mtxGN6Vkycw0pzuc7nHw",
    name: "Soon",
    icon: "calendar-check",
    color: "green",
    route: "/next/soon"
};
const next = {
    id: "I10ifHO0PEGrSxI_nNi-ag",
    name: "Next",
    icon: "check-square",
    color: "green",
    route: "/next",
    children: [today,thisweek,soon]
};
const focus = {
    id: "fFrT8jnMA0W0iqLa8iLeNw",
    name: "Focus",
    icon: "star",
    color: "red",
    route: "/focus"
};
const waitingfor = {
    id: "qvyAi6BwzUefiROWuco38g",
    name: "Waiting for",
    icon: "account-box",
    color: "orange",
    route: "/waitingfor"
};
const calendar = {
    id: "kvIGBCUWZkuzp86JaHye4A",
    name: "Calendar",
    icon: "calendar",
    color: "cyan",
    route: "/scheduled/calendar"
};
const reminders = {
    id: "XueTfO9q9EuzgzsMcjI1oA",
    name: "Reminders",
    icon: "notifications",
    color: "cyan",
    route: "/scheduled/reminders"
};
const scheduled = {
    id: "ELm2BGNyHkCGsEzL5hp_JQ",
    name: "Scheduled",
    icon: "time",
    color: "cyan",
    route: "/scheduled",
    children: [calendar,reminders]
};
const someday = {
    id: "Jldp4JOaD0Oa3W1eOe17ug",
    name: "Someday",
    icon: "pause",
    color: "purple",
    route: "/someday"
};
const project1 = {
    id: "7EHOtAYARkG0c43qsDH5cQ",
    name: "Project 1",
    icon: "assignment",
    color: "pink",
    route: "/projects/1"
};
const project2 = {
    id: "0dCP51BWpEuPWDLiWVKQOQ",
    name: "Project 2",
    icon: "assignment",
    color: "pink",
    route: "/projects/2"
};
const project3 = {
    id: "C_xUMSgdpEuS4Yt1XlO-XQ",
    name: "Project 3",
    icon: "assignment",
    color: "pink",
    route: "/projects/3"
};
const projects = {
    id: "UeWFiTObrEGrl88O9woGtA",
    name: "Projects",
    icon: "assignment-o",
    color: "pink",
    route: "/projects",
    children: [project1,project1,project3]
};
const review = {
    id: "IsYuh58UnkyUYZKU0TcGXw",
    name: "Review",
    icon: "local-cafe",
    color: "brown",
    route: "/review"
};
const checklists = {
    id: "uP4uSZ3m9U_bDloeUpDcYw",
    name: "Checklists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: "/lists/checklists"
};
const reference = {
    id: "f4NkhuA_PkGyRi7yZIx0Qg",
    name: "Reference",
    icon: "book",
    color: "deep-purple",
    route: "/lists/reference"
};
const done = {
    id: "3Jrjgc86U0m6afkizxB2SA",
    name: "Done",
    icon: "archive",
    color: "deep-purple",
    route: "/lists/done"
};
const trash = {
    id: "pSzvcNe3T0q5fwcB2kDUtQ",
    name: "Trash",
    icon: "delete",
    color: "deep-purple",
    route: "/lists/trash"
};
const lists = {
    id: "ZABTfpmKh0KSbeN7QwKd3Q",
    name: "Lists",
    icon: "view-list-alt",
    color: "deep-purple",
    route: "/lists",
    children: [checklists,reference,done,trash]
};
const roles = {
    id: "RFhgTTkk0Ey3kg_xSpwD8w",
    name: "Roles",
    icon: "local-offer",
    color: "teal",
    route: "/contexts/roles"
};
const contexts = {
    id: "QXFQzrUDCUC_kfWP9zSPDg",
    name: "Contexts ",
    icon: "pin",
    color: "teal",
    route: "/contexts/contexts"
};
const flags = {
    id: "0w0JGgMyX0e0YWm583VwOQ",
    name: "Flags ",
    icon: "flag",
    color: "teal",
    route: "/contexts/flags"
};
const delegates = {
    id: "QcRkScJUWkesxZ3Wn-ZT_Q",
    name: "Delegates ",
    icon: "account-box",
    color: "teal",
    route: "/contexts/delegates"
};
const contexttypes = {
    id: "TuVm9HPakUeoCI2e7XLXPA",
    name: "Contexts",
    icon: "pin",
    color: "teal",
    route: "/contexts",
    children: [roles,contexts,flags,delegates]
};
const profile = {
    id: "H-IuJIo9Vkif4JZRKqUd-Q",
    name: "Profile ",
    icon: "account-circle",
    color: "indigo",
    route: "/settings/profile"
};
const general = {
    id: "XcWlwKAXUUS-R-GHN6Ugfg",
    name: "General ",
    icon: "settings",
    color: "indigo",
    route: "/settings/general"
};
const settings = {
    id: "lMsxrLlF2Eq6PHgxX2_jkw",
    name: "Settings",
    icon: "settings",
    color: "indigo",
    route: "/settings",
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
routelookup = {
    "/":[[],[]],
    "/inbox":[[],[inbox]],
    "/next":[[1],[next]],
    "/next/today":[[1],[next,today]],
    "/next/thisweek":[[1],[next,thisweek]],
    "/next/soon":[[1],[next,soon]],
    "/focus":[[2],[focus]],
    "/waitingfor":[[3],[waitingfor]],
    "/scheduled":[[4],[scheduled]],
    "/scheduled/calendars":[[4],[scheduled,calendar]],
    "/scheduled/reminders":[[4],[scheduled,reminders]],
    "/someday":[[5],[someday]],
    "/projects":[[6],[projects]],
    "/projects/projects1":[[6],[projects,project1]],
    "/projects/projects2":[[6],[projects,project2]],
    "/projects/projects3":[[6],[projects,project3]],
    "/review":[[7],[review]],
    "/lists":[[8],[lists]],
    "/lists/checklists":[[8],[lists,checklists]],
    "/lists/reference":[[8],[lists,reference]],
    "/lists/done":[[8],[lists,done]],
    "/lists/trash":[[8],[lists,trash]],
    "/contexttypes":[[9],[contexttypes]],
    "/contexttypes/roles":[[9],[contexttypes,roles]],
    "/contexttypes/contexts":[[9],[contexttypes,contexts]],
    "/contexttypes/flags":[[9],[contexttypes,flags]],
    "/contexttypes/delegates":[[9],[contexttypes,delegates]],
    "/settings":[[10],[settings]],
    "/settings/profile":[[10],[settings,profile]],
    "/settings/general":[[10],[settings,general]]
};


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

