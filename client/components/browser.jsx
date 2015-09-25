
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
        this.currNode().isLeafNode ? this.popNode(2) : this.popNode(1);
    },
    newNode(index, isLeafNode) {
        return {'index':index, 'isLeafNode': isLeafNode};
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
        this.pushNode(this.newNode(index,false));
    },
    navRoute(index) {
        if (this.currNode().isLeafNode) {
            this.popNode(1,this.pushNode(this.newNode(index,true)));
        } else {
            this.pushNode(this.newNode(index,true));
        }
    },
    filterItems(){
        return this.state.path.filter(function(node){return !node.isLeafNode});
    },
    render() {
        let parent = {};

        const items = this.filterItems().reduce(function(items, key) {
            parent = items[key.index];
            return items[key.index].children;
        }, this.props.items);

        let navicon, navtitle;
        if (this.state.path.length > 0) {
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

            <SlideTransition depth={this.filterItems().length} className="items-container">
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
