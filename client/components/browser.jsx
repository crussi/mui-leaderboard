
Browser = React.createClass({
    getInitialState() {
        return {
            path: []
        }
    },
    navUp() {
        this.setState({path: this.state.path.slice(0, -1)})
    },
    navDown(index) {
        this.setState({path: this.state.path.concat(index)})
    },
    render() {
        const {path} = this.state;
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


            <SlideTransition depth={path.length} className="items-container">
                {items.map(function(item, index) {
                    return <BrowserItem item={item} index={index} callbackNavDown={this.navDown}></BrowserItem>
                }.bind(this))}
            </SlideTransition>

        </div>;
    }
});
