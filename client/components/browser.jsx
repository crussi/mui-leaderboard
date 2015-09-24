
Browser = React.createClass({
    getInitialState() {
        return {
            path: []
        }
    },
    printState(src) {
        console.log('from ' + src);
        this.state.path.map(function(item) {
            console.log(item.idx + ' ' + item.sel + ' ' + item.isroute);
        });
    },
    navUp() {
        console.log('navUp');
        if (this.state.path[this.state.path.length-1].isroute) {
            this.printState('navUp b4');
            //this.setState({path: this.state.path.slice(0, -1)},this.printState('navUp remove leaf'));
            this.setState({path: this.state.path.pop()},this.printState('navUp remove leaf'));
        }
        this.setState({path: this.state.path.slice(0, -1)},this.printState('navUp af'));
        //this.setState({path: this.state.path.pop()},this.printState('navUp af'));
        //this.setState({path2: this.state.path2.slice(0, -1)},function(){console.log('af path2: ' + this.state.path2);});
        //if (this.state.selected.length == this.state.path.length + 1) {
        //    //console.log('navUp pop selected');
        //    //console.log('b4 selected: ' + this.state.selected);
        //    this.setState({selected: this.state.selected.slice(0, -1)},function(){console.log('af selected: ' + this.state.selected);});
        //}

    },
    navDown(index) {
        console.log('navDown');
        //if (this.state.path.length == 0) {
        //    this.setState({selected: this.state.selected.slice(0, -1)},function(){
        //        console.log('af selected: ' + this.state.selected);
        //        this.setState({selected: this.state.selected.concat(index)},function(){console.log('af selected: ' + this.state.selected);})
        //    });
        //} else {
        //    this.setState({selected: this.state.selected.concat(index)},function(){console.log('af selected: ' + this.state.selected);})
        //}
        //this.setState({path: this.state.path.concat(index)},function(){console.log('af path: ' + this.state.path);});
        this.printState('navDown b4');
        let item = {'idx':index, 'sel':index, 'isroute': false};
        //console.log('item idx: ' + item.idx + ' sel: ' + item.sel + ' isroute: ' + item.isroute);
        this.setState({path: this.state.path.concat([item])},this.printState('navDown af'));
    },
    navRoute(index) {
        this.printState('navRoute b4');
        let item = {'idx':index, 'sel':index, 'isroute': true};
        //console.log('b4 selected: ' + this.state.selected);
        //this.setState({selected: this.state.selected.concat(index)},function() {console.log('af path: ' + this.state.path);console.log('af selected: ' + this.state.selected);});
        this.setState({path: this.state.path.concat([item])},this.printState('navRoute af'));
    },
    render() {
        let parent = {};
        //let selIndx = selected.length > 0 ? selected[selected.length-1] : undefined;
        //const {path} = this.state;
        //const path = this.state.path;
        //console.log('{path}: ' + {path});
        const items = this.state.path.filter(function(item){return !item.isroute}).reduce(function(items, key) {
            console.log('reduce key: ' + key.idx + ' isroute: ' + key.isroute);
            parent = items[key.idx];
            return items[key.idx].children;
        }, this.props.items);

        //items.map(function(item, index) {
        //    console.log('item: ' + item.name);
        //});
        let navicon, navtitle;
        if (this.state.path.length > 0) {
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

            <SlideTransition depth={this.state.path.length} className="items-container">
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
