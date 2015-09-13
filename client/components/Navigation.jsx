const {
    RaisedButton,
    FontIcon,
    Avatar,
    AppBar,
    LeftNav,
    MenuItem,
    IconButton


    } = mui;

Navigation = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState: function () {
        return {
            //leftNavOpen: false
        };
    },
    onLeftIconButtonTouchTap: function() {
        //this.setState({ checked: newState });
        console.log('parent - child changed');
        this.refs.sideNav.toggle();
    },
    toggleSideNav() {
        console.log('toggleSideNav');
        this.refs.sideNav.toggle();    },
    closeSideNav: function () {
        console.log('closeSideNav');
        this.refs.sideNav.close();
    },
    getMeteorData() {
        return {
            menuItems : [
                { route: 'get-started', text: 'Get Started' },
                { route: 'customization', text: 'Customization' },
                { route: 'components', text: 'Components' },
                { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
                {
                    type: MenuItem.Types.LINK,
                    payload: 'https://github.com/callemall/material-ui',
                    text: 'GitHub'
                },
                {
                    text: 'Disabled',
                    disabled: true
                },
                {
                    type: MenuItem.Types.LINK,
                    payload: 'https://www.google.com',
                    text: 'Disabled Link',
                    disabled: true
                }
            ]
        }
    },
    render() {
        //console.log('Navigation docked: ' + this.props.docked);
        return (
            <div>
                <HeaderNav callbackParent={this.onLeftIconButtonTouchTap}/>
                <SideNav ref="sideNav" docked={this.props.docked} menuItems={this.data.menuItems} />
            </div>);
    }
});