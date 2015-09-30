
Browser = React.createClass({
    getInitialState() {
        return {
            path: [],
            selected:[]
        }
    },
    navUp() {
        this.setState({path: this.state.path.slice(0, -1)});
        this.setState({selected: this.state.selected.slice(0, -1)});
        //??how set selectedId??
    },
    navDown(item,index) {
        console.log('browser navDown id: ' + item.id);
        if (item.children) {
            this.setState({path: this.state.path.concat(index)});
            this.setState({selected: this.state.selected.slice(0,-1).concat(item.id).concat('')})
        } else {
            this.setState({selected: this.state.selected.slice(0,-1).concat(item.id)})
        }
    },
    render() {
        const {path} = this.state;
        let selectedId = this.state.selected[this.state.selected.length-1];
        let parent = {};
        const items = path.reduce(function(items, key) {
            parent = items[key];
            return items[key].children;
        }, this.props.items);

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
