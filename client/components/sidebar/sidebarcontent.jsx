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
    render() {
        let style = styles.sidebar;

        if (this.props.style) {
            style = update(style, {$merge: this.props.style});
        }
        let sliderMenuProps = {
            items: menudata,
            routestate: routestate
        }
        return (
            <TitlePanel title="Menu" style={style}>
                <SliderMenu {...sliderMenuProps}/>
            </TitlePanel>);
    },
});
