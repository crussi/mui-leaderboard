const {
    AppBar,
    LeftNav,
    MenuItem
    } = mui;

SideNav = React.createClass({
    toggle() {
        this.refs.leftNav.toggle();
    },
    close() {
        this.refs.leftNav.close();
    },
    render() {
        //console.log('sidenav docked: ' + this.props.docked);
        return (
            <div id="sideNav">
                <LeftNav className="my-side-nav" ref="leftNav" docked={this.props.docked} menuItems={this.props.menuItems}
                          />
            </div>);
    }
});