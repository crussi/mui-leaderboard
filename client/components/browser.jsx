
Browser = React.createClass({
    getInitialState() {
        return {
            path: []
        }
    },
    printState(src) {
        console.log('path len: ' + this.state.path.length);
    },
    navUp() {
        if (this.currNode().isLeafNode) {
            this.popNode(2);
        } else {
            this.popNode(1);
        }
    },
    currNode(){
        return this.state.path[this.state.path.length-1];
    },
    popNode(amt,callback){
        if (callback) {
            this.setState({path: this.state.path.slice(0, -1*amt)},callback());
        } else {
            this.setState({path: this.state.path.slice(0, -1*amt)});
        }

    },
    pushNode(node){
        this.setState({path: this.state.path.concat([node])});
    },
    navDown(index) {
        let node = {'idx':index, 'sel':index, 'isLeafNode': false};
        this.pushNode(node);
    },
    navRoute(index) {
        let item = {'idx':index, 'sel':index, 'isLeafNode': true};
        if (this.currNode().isLeafNode) {
            this.setState({path: this.state.path.slice(0, -1)},this.pushRoute(index));
        } else {
            this.pushRoute(index);
        }
    },
    pushRoute(index){
        let item = {'idx':index, 'sel':index, 'isLeafNode': true};
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
        const items = this.state.path.filter(function(item){return !item.isLeafNode}).reduce(function(items, key) {
            console.log('reduce key: ' + key.idx + ' isLeafNode: ' + key.isLeafNode);
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

            <SlideTransition depth={this.state.path.filter(function(item){return !item.isLeafNode}).length} className="items-container">
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
