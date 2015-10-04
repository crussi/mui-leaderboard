
SliderMenu = React.createClass({
    getInitialState() {
        return {
            path: [],
            selected: []
        }
    },
    componentDidMount: function() {
        window.addEventListener('popstate', this.handleRouteChange);
    },

    componentWillUnmount: function() {
        window.removeEventListener('popstate', this.handleRouteChange);
    },
    handleRouteChange(event){
        let routestate = this.props.routestate[event.state.path];
        let path = routestate ? routestate[0] : [];
        let selected = routestate ? routestate[1] : [];
        this.setState({path: path});
        this.setState({selected: selected});
    },
    navUp() {
        if (this.state.selected.length > 0) {
            let item = this.state.selected[this.state.selected.length-2];
            FlowRouter.go(item.route);
        }
        this.setState({path: this.state.path.slice(0, -1)});
        this.setState({selected: this.state.selected.slice(0, -1)});
    },
    navDown(item,index) {
        if (item.children) {
            this.setState({path: this.state.path.concat(index)});
            this.setState({selected: this.state.selected.slice(0,-1).concat(item).concat('')});
        } else {
            this.setState({selected: this.state.selected.slice(0,-1).concat(item)})
        }
        if (item.route) {
            FlowRouter.go(item.route);
        }
    },
    render() {
        const {path} = this.state;
        let selectedId = '';
        let item = {};
        if (this.state.selected.length > 0) {
            item = this.state.selected[this.state.selected.length-1];
            selectedId = item.id;
        }

        let parent = {};
        const items = path.reduce(function(items, key) {
            //console.log('inside reduce items: ' + items + ' key: ' + key);
            parent = items[key];
            return items[key].children;
        }, this.props.items) || this.props.items;

        let navicon, navtitle;
        if (path.length > 0) {
            navicon = <a className="nav-arrow" onClick={this.navUp}><i className="zmdi zmdi-chevron-left"></i></a>;
            navtitle = <a className="nav-title" onClick={this.navUp}>{parent.name}</a>;

        } else {
            navicon = <div className="nav-arrow"></div>;
            navtitle = <span className="nav-title">Home</span>;
        }

        return <div className="browser browser-panel">
            <div className="menu-navbar">
                {navicon}
                {navtitle}
            </div>

            <SliderTransition depth={path.length} selectedId={selectedId} className="items-container">
                {items.map(function(item, index) {
                    return <SliderMenuItem item={item} index={index} selectedId={selectedId} callbackNavDown={this.navDown}></SliderMenuItem>
                }.bind(this))}
            </SliderTransition>

        </div>;
    }
});
