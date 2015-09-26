const update = React.addons.update;

const styles = {
    sidebar: {
        width: 256,
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
    {name: 'Animal', children: [
        {name: 'Land', children: [
            {name: 'Cheetah'},
            {name: 'Ant'},
        ]},
        {name: 'Air', children: [
            {name: 'Eagle'},
        ]},
        {name: 'Water', children: [
            {name: 'Nessy'},
        ]},
    ]},
    {name: 'Vegetable', children: [
        {name: 'Broccoli'},
        {name: 'IE6'},
    ]},
    {name: 'Mineral', children: [
        {name: 'Granite'},
        {name: 'Uraninite'},
    ]},
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