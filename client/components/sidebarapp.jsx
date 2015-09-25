


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
            docked: true,
            open: false,
            transitions: true,
            touch: true,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
        };
    },

    onSetOpen(open) {
        this.setState({open: open});
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
        let sidebar = <SidebarContent />;

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
                <MaterialTitlePanel title={contentHeader}>

                </MaterialTitlePanel>
            </Sidebar>
        );
    }
});

