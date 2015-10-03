
Browser = React.createClass({
    getInitialState() {
        //console.log('getInitialState browser');
        return {
            path: [],
            selected: []
        }
    },
    componentWillReceiveProps(nextProps){
    //    console.log('componentWillReceiveProps browser nextProps: ' + nextProps.initialPath + ' - ' + nextProps.initialSelected[0].name);
    //    this.setState({path: nextProps.initialPath ? nextProps.initialPath : []});
    //    this.setState({selected: nextProps.initialSelected ? nextProps.initialSelected : []});
    },
    componentDidMount: function() {
        window.addEventListener('popstate', this.handleRouteChange);
    },

    componentWillUnmount: function() {
        window.removeEventListener('popstate', this.handleRouteChange);
    },
    handleRouteChange(event){
        //console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
        //console.log(JSON.stringify(event.state)); //state: {"path":"/someday"}
        //let selected = [];
        //ary.push('a'); ary.push('b'); ary.push('c');
        //console.log('ary: ' + ary);
        let routePath = event.state.path;
        //console.log('path: ' + routePath);
        //console.log('routestate: ' + this.props.routestate[routePath]);
        let routestate = this.props.routestate[routePath];
        let path = routestate ? routestate[0] : [];
        let selected = routestate ? routestate[1] : [];
        //console.log('path: ' + path);
        //console.log(Object.prototype.toString.call(path));
        //console.log('selected: ' + selected);
        //console.log(Object.prototype.toString.call(selected));
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
        //console.log('browser navDown id: ' + item.id);
        if (item.children) {
            this.setState({path: this.state.path.concat(index)});
            this.setState({selected: this.state.selected.slice(0,-1).concat(item).concat('')});
        } else {
            this.setState({selected: this.state.selected.slice(0,-1).concat(item)})
        }
        //console.log('route: ' + item.route);
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
            //FlowRouter.go(item.route);
        }

        let parent = {};
        const items = path.reduce(function(items, key) {
            //console.log('inside reduce items: ' + items + ' key: ' + key);
            parent = items[key];
            return items[key].children;
        }, this.props.items) || this.props.items;

        //console.log('items: ' + items);
        console.log('path: ' + path + 'path.length: ' + path.length);

        let navicon, navtitle;
        if (path.length > 0) {
            navicon = <a className="nav-arrow" onClick={this.navUp}><i className="zmdi zmdi-chevron-left"></i></a>;
            navtitle = <a className="nav-title" onClick={this.navUp}>{parent.name}</a>;

        } else {
            navicon = <div className="nav-arrow"></div>;
            navtitle = <span className="nav-title">Home</span>;
            //navtitle = <a className="nav-title" onClick={this.navUp}>Home</a>;
        }

        return <div className="browser browser-panel">
            <div className="menu-navbar">
                {navicon}
                {navtitle}
            </div>


            <SlideTransition depth={path.length} selectedId={selectedId} className="items-container">
                {items.map(function(item, index) {
                    return <BrowserItem item={item} index={index} selectedId={selectedId} callbackNavDown={this.navDown}></BrowserItem>
                }.bind(this))}
            </SlideTransition>

        </div>;
    }
});
