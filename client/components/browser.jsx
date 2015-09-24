
Browser = React.createClass({
    getInitialState() {
        return {
            path: [],
            selected: []
        }
    },
    navUp() {
        console.log('navUp');
        this.setState({path: this.state.path.slice(0, -1)},function(){console.log('af path: ' + this.state.path);});
        if (this.state.selected.length == this.state.path.length + 1) {
            //console.log('navUp pop selected');
            //console.log('b4 selected: ' + this.state.selected);
            this.setState({selected: this.state.selected.slice(0, -1)},function(){console.log('af selected: ' + this.state.selected);});
        }

    },
    navDown(index) {
        console.log('navDown');
        if (this.state.path.length == 0) {
            this.setState({selected: this.state.selected.slice(0, -1)},function(){
                console.log('af selected: ' + this.state.selected);
                this.setState({selected: this.state.selected.concat(index)},function(){console.log('af selected: ' + this.state.selected);})
            });
        } else {
            this.setState({selected: this.state.selected.concat(index)},function(){console.log('af selected: ' + this.state.selected);})
        }
        this.setState({path: this.state.path.concat(index)},function(){console.log('af path: ' + this.state.path);});
    },
    navRoute(index) {
        console.log('navRoute');
        console.log('b4 selected: ' + this.state.selected);
        this.setState({selected: this.state.selected.concat(index)},function() {console.log('af path: ' + this.state.path);console.log('af selected: ' + this.state.selected);});
    },
    render() {
        let parent = {};
        //let selIndx = selected.length > 0 ? selected[selected.length-1] : undefined;
        const {path} = this.state;
        const items = path.reduce(function(items, key) {
            parent = items[key];
            return items[key].children;
        }, this.props.items);

        //items.map(function(item, index) {
        //    console.log('item: ' + item.name);
        //});
        let navicon, navtitle;
        if (path.length > 0) {
            //navicon = <a className="nav-arrow">x</a>;
            //navtitle = <a className="nav-title">hello</a>;
            navicon = <a className="nav-arrow" onClick={this.navUp}><i className="zmdi zmdi-chevron-left"></i></a>;
            navtitle = <a className="nav-title" onClick={this.navUp}>{parent.name}</a>;

        } else {
            navicon = <div></div>;
            navtitle = <p className="nav-title">Home</p>;
        }
        return <div className="browser browser-panel">
            <div className="menu-navbar">
                {navicon}
                {navtitle}
            </div>

            <SlideTransition depth={path.length} className="items-container">
                {items.map(function(item, index) {
                    if (item.children) {
                        return <div className="menu-item"><a className="item" onClick={e => this.navDown(index)} key={item.name}>{item.name}</a><i className="zmdi zmdi-chevron-right"></i></div>;
                    } else {
                        return <div className="item" onClick={e => this.navRoute(index)} key={item.name}>{item.name}</div>;
                    }
                }.bind(this))}
            </SlideTransition>

        </div>;
    }
});
