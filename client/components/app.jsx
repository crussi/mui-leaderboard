const {
    RaisedButton,
    FontIcon,
    Avatar,
    AppBar,
    LeftNav,
    MenuItem,
    IconButton


    } = mui;

const Colors = mui.Styles.Colors;
const ThemeManager = new mui.Styles.ThemeManager();


App = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState: function () {
        var mq = window.matchMedia("(min-width: 1024px)");
        return {
            selectedPlayerId: null,
            isfixedDrawer: (mq.matches)
        };
    },
    handleResize: function(e) {
        //console.log('window resize');
        var mq = window.matchMedia("(min-width: 1024px)");
        if (this.state.isfixedDrawer !== mq.matches) {
            this.setState({isfixedDrawer: (mq.matches)});
            this.refs.nav.toggleSideNav();
        }
        
    },

    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    //shouldComponentUpdate: function(nextProps, nextState) {
    //    //return nextProps.id !== this.props.id;
    //    console.log('shouldComponentUpdate');
    //    return true;
    //},
    //componentWillUpdate: function(nextProps, nextState) {
    //    console.log('componentWillUpdate');
    //},
    //componentDidUpdate: function(prevProps, prevState) {
    //    console.log('componentDidUpdate');
    //},
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    getMeteorData() {
        return {
            players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
            selectedPlayer: Players.findOne(this.state.selectedPlayerId),
        }
    },
    selectPlayer(playerId) {
        this.setState({
            selectedPlayerId: playerId,
        });
    },
    addPointsToPlayer(playerId) {
        Players.update(playerId, {$inc: {score: 5}});
    },
    render() {
        let bottomBar;
        if (this.state.selectedPlayerId) {
            bottomBar = (
                <div className="details">
                    <div className="name">{this.data.selectedPlayer.name}</div>
                    <RaisedButton
                        onClick={this.addPointsToPlayer.bind(
              this, this.state.selectedPlayerId)}
                        style={{float: "right"}}
                        label="Add 5 points"
                        primary={true}/>
                </div>
            )
        } else {
            bottomBar = <div className="message">Click a player to select</div>;
        }

        //let iconNameLeft =  this.state.leftNavOpen ? 'zmdi zmdi-close' : 'zmdi zmdi-menu';
        //let title = this.state.leftNavOpen ? 'Leaderboard opened' : 'Leaderboard closed';
        //let docked = this.state.leftNavOpen ? true : false;
        //let appBar = (<AppBar
        //    title="Leaderboard"
        //    //iconClassNameLeft={iconNameLeft}
        //    iconClassNameRight="muidocs-icon-navigation-expand-more"
        //    onLeftIconButtonTouchTap={this.leftIconButtonTouchTap}
        //    />)
        var drawerClass = this.state.isfixedDrawer ? 'fixed-drawer': 'toggle-drawer';
        return (
            <div className={drawerClass}>
                <Navigation ref="nav" docked={this.state.isfixedDrawer}/>
                <div id='content'>
                <Leaderboard players={this.data.players}
                             selectedPlayerId={this.state.selectedPlayerId}
                             onPlayerSelected={this.selectPlayer} />
                { bottomBar }
                </div>
            </div>
        );
    }
});
