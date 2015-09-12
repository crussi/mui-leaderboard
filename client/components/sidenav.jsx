const {
    AppBar,
    LeftNav,
    MenuItem
    } = mui;

SideNav = React.createClass({
    toggle() {
        this.refs.leftNav.toggle();
    },
    render() {
        return (
            <div>
                <LeftNav ref="leftNav" docked={this.props.docked} menuItems={this.props.menuItems}
                         header={<AppBar title="Toduo" showMenuIconButton={false} />} />
            </div>);
    }
});