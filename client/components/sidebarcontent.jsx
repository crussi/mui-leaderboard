const update = React.addons.update;

const styles = {
    sidebar: {
        width: 300,
    },
    sidebarLink: {
        display: 'block',
        padding: '16px 0px',
        color: '#757575',
        textDecoration: 'none',
    },
    divider: {
        margin: '8px 0',
        height: 1,
        backgroundColor: '#757575',
    },
};


const data = [
    {
        id:"FDDp1ru10UCxl2Xnv2NT2Q",
        name: "Inbox",
        icon: "inbox",
        color: "blue",
        route: ""
    },
    {
        id:"I10ifHO0PEGrSxI_nNi-ag",
        name: "Next",
        icon: "check-square",
        color: "green",
        route: "",
        children: [
            {
                id:"bFolGPm9ikShWzx76mq0GQ",
                name: "Today",
                icon: "calendar",
                color: "green",
                route: ""
            },
            {
                id:"_dy3uCTWF0qsWqELiinqFg",
                name: "This Week",
                icon: "calendar-note",
                color: "green",
                route: ""
            },
            {
                id:"w7mtxGN6Vkycw0pzuc7nHw",
                name: "Soon",
                icon: "calendar-check",
                color: "green",
                route: ""
            }
        ]
    },
    {
        id:"fFrT8jnMA0W0iqLa8iLeNw",
        name: "Focus",
        icon: "star",
        color: "red",
        route: ""
    },
    {
        id:"qvyAi6BwzUefiROWuco38g",
        name: "Waiting for",
        icon: "account-box",
        color: "orange",
        route: ""
    },
    {
        id:"ELm2BGNyHkCGsEzL5hp_JQ",
        name: "Scheduled",
        icon: "time",
        color: "cyan",
        route: "",
        children: [
            {
                id:"kvIGBCUWZkuzp86JaHye4A",
                name: "Calendar",
                icon: "calendar",
                color: "cyan",
                route: ""
            },
            {
                id:"XueTfO9q9EuzgzsMcjI1oA",
                name: "Reminders",
                icon: "notifications",
                color: "cyan",
                route: ""
            }
        ]
    },
    {
        id:"Jldp4JOaD0Oa3W1eOe17ug",
        name: "Someday",
        icon: "pause",
        color: "purple",
        route: ""
    },
    {
        id:"UeWFiTObrEGrl88O9woGtA",
        name: "Projects",
        icon: "assignment-o",
        color: "pink",
        route: "",
        children: [
            {
                id:"7EHOtAYARkG0c43qsDH5cQ",
                name: "Project 1",
                icon: "assignment",
                color: "pink",
                route: ""
            },
            {
                id:"0dCP51BWpEuPWDLiWVKQOQ",
                name: "Project 2",
                icon: "assignment",
                color: "pink",
                route: ""
            },
            {
                id:"C_xUMSgdpEuS4Yt1XlO-XQ",
                name: "Project 3",
                icon: "assignment",
                color: "pink",
                route: ""
            },
        ]
    },
    {
        id:"IsYuh58UnkyUYZKU0TcGXw",
        name: "Review",
        icon: "local-cafe",
        color: "brown",
        route: ""
    },
    {
        id:"ZABTfpmKh0KSbeN7QwKd3Q",
        name: "Lists",
        icon: "view-list-alt",
        color: "deep-purple",
        route: "",
        children: [
            {
                id:"uP4uSZ3m9U_bDloeUpDcYw",
                name: "Checklists",
                icon: "view-list-alt",
                color: "deep-purple",
                route: ""
            },
            {
                id:"f4NkhuA_PkGyRi7yZIx0Qg",
                name: "Reference",
                icon: "book",
                color: "deep-purple",
                route: ""
            },
            {
                id:"3Jrjgc86U0m6afkizxB2SA",
                name: "Done",
                icon: "archive",
                color: "deep-purple",
                route: ""
            },
            {
                id:"pSzvcNe3T0q5fwcB2kDUtQ",
                name: "Trash",
                icon: "delete",
                color: "deep-purple",
                route: ""
            }
        ]
    },
    {
        id:"TuVm9HPakUeoCI2e7XLXPA",
        name: "Contexts",
        icon: "pin",
        color: "teal",
        route: "",
        children: [
            {
                id:"RFhgTTkk0Ey3kg_xSpwD8w",
                name: "Roles",
                icon: "local-offer",
                color: "teal",
                route: ""
            },
            {
                id:"QXFQzrUDCUC_kfWP9zSPDg",
                name: "Contexts ",
                icon: "pin",
                color: "teal",
                route: ""
            },
            {
                id:"0w0JGgMyX0e0YWm583VwOQ",
                name: "Flags ",
                icon: "flag",
                color: "teal",
                route: ""
            },
            {
                id:"QcRkScJUWkesxZ3Wn-ZT_Q",
                name: "Delegates ",
                icon: "account-box",
                color: "teal",
                route: ""
            }
        ]
    },
    {
        id:"lMsxrLlF2Eq6PHgxX2_jkw",
        name: "Settings",
        icon: "settings",
        color: "indigo",
        route: "",
        children: [
            {
                id:"H-IuJIo9Vkif4JZRKqUd-Q",
                name: "Profile ",
                icon: "account-circle",
                color: "indigo",
                route: ""
            },
            {
                id:"XcWlwKAXUUS-R-GHN6Ugfg",
                name: "General ",
                icon: "settings",
                color: "indigo",
                route: ""
            }
        ]
    }
];

SidebarContent = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
        //console.log('nextProps: ' + nextProps);
        //console.log('nextState: ' + nextState);
        return true;
    },
    render() {
        //console.log('SidebarContent render');
        let style = styles.sidebar;

        if (this.props.style) {
            style = update(style, {$merge: this.props.style});
        }

        return (
            <MaterialTitlePanel title="Menu" style={style}>
                <Browser items={data} />
            </MaterialTitlePanel>);
    },
});