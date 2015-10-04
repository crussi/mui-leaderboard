


const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
};

SidebarApp = React.createClass({
    getInitialState() {
        return {
            docked: false,
            open: false,
            transitions: true,
            touch: true,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
        };
    },
    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    },
    onSetOpen(open) {
        this.setState({open: open});
    },
    componentDidMount() {
        let mql = window.matchMedia(`(min-width: 800px)`);
        mql.addListener(this.mediaQueryChanged);
        this.setState({mql: mql, docked: mql.matches});
    },

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    },

    mediaQueryChanged() {
        this.setState({docked: this.state.mql.matches});
    },

    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    },

    renderPropCheckbox(prop) {
        let toggleMethod = (ev) => {
            let newState = {};
            newState[prop] = ev.target.checked;
            this.setState(newState);
        };

        return (
            <p key={prop}>
                <input type='checkbox' onChange={toggleMethod} checked={this.state[prop]} id={prop} />
                <label htmlFor={prop}> {prop}</label>
            </p>);
    },

    renderPropNumber(prop) {
        let setMethod = (ev) => {
            let newState = {};
            newState[prop] = parseInt(ev.target.value);
            this.setState(newState);
        };

        return (
            <p key={prop}>
                {prop} <input type='number' onChange={setMethod} value={this.state[prop]} />
            </p>);
    },

    render() {
        //console.log('sidebarapp render');
        let sidebar = <SidebarContent routestate={this.props.routestate} />;

        let contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.menuButtonClick} href='#' style={styles.contentHeaderMenuLink}>=</a>}
                <span> React Sidebar</span>
      </span>);

        let sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            touch: this.state.touch,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };

        return (
            <Sidebar {...sidebarProps}>
                <TitlePanel title={contentHeader} >
                    {this.props.content}
                </TitlePanel>
            </Sidebar>
        );
    }
});

