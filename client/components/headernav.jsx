const {
    RaisedButton,
    FontIcon,
    Avatar,
    AppBar,
    LeftNav,
    MenuItem,
    IconButton


    } = mui;

HeaderNav = React.createClass({
    getInitialState: function () {
        return {
            leftNavOpen: false
        };
    },
    leftIconButtonTouchTap(){
        console.log('open: ' + !this.state.leftNavOpen);
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
        this.refs.leftNav.toggle();
    },
    render() {
        return (<div>
            <AppBar
                title="Leaderboard"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.leftIconButtonTouchTap}
                />
        </div>);
    }
});
