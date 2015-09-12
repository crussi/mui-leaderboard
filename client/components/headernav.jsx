const {
    AppBar
    } = mui;

HeaderNav = React.createClass({
    getInitialState: function () {
        return {
            leftNavOpen: false
        };
    },
    leftIconButtonTouchTap(){
        this.props.callbackParent(); // hey parent, I've changed!
    },
    render() {
        return (<div>
            <AppBar className="my-header-nav"
                title="Leaderboard"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.leftIconButtonTouchTap}
                />
        </div>);
    }
});
