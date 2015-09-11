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
            leftNavOpen: false
        };
    },
    changeHandler: function(value) {
        this.setState({
            value: value
        });
    },
    leftIconButtonTouchTap(){
        console.log('open: ' + !this.state.leftNavOpen);
        this.setState({
            leftNavOpen: !this.state.leftNavOpen
        });
        this.refs.leftNav.toggle();
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
        return (
            <div>
                <HeaderNav/>

                <LeftNav ref="leftNav" docked={false} menuItems={this.data.menuItems}
                         header={<AppBar title="Toduo" showMenuIconButton={false} />} />
            </div>);
    }
});