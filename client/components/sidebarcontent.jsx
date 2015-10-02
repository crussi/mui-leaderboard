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
                <Browser items={menudata} />
            </MaterialTitlePanel>);
    },
});
