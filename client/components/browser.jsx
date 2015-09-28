
Browser = React.createClass({
    getInitialState() {
        return {
            path: [],
            selectedId: ""
        }
    },
    printState(src) {
        console.log('path len: ' + this.state.path.length);
    },
    navUp() {
        this.currNode().isLeafNode ? this.popNode(2) : this.popNode(1);
        this._goRoute('');
    },
    navDown(index,id) {
        this.pushNode(this.newNode(index,false));
        this.setState({selectedId: id});
        this._goRoute('');
    },
    newNode(index, isLeafNode) {
        return {'index':index, 'isLeafNode': isLeafNode};
    },
    currNode(){
        return this.state.path[this.state.path.length-1];
    },
    selectedId(){
        //return this.currNode() ? this.currNode().index : -1;
        return this.state.selectedId;
    },
    popNode(amt,callback){
        if (callback) {
            this.setState({path: this.state.path.slice(0, -1*amt)},callback());
        } else {
            this.setState({path: this.state.path.slice(0, -1*amt)});
        }
    },
    pushNode(node,callback){
        if (callback) {
            this.setState({path: this.state.path.concat([node])},callback());
        } else {
            this.setState({path: this.state.path.concat([node])});
        }

    },
    navRoute(e, index,id) {
        let name = e.target.dataset.name;
        this.setState({selectedId: id});
        if (this.currNode() && this.currNode().isLeafNode) {
            this.popNode(1,this.pushNode(this.newNode(index,true)));
        } else {
            this.pushNode(this.newNode(index,true));
        }
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.dataset.name);
        this._goRoute(name);
    },
    _goRoute(name){
        //console.log('goroute');
        //FlowRouter.go('/'+name);
    },
    filterItems(){
        return this.state.path.filter(function(node){return !node.isLeafNode});
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        //console.log('nextProps: ' + nextProps);
        //console.log('nextState: ' + nextState);
        //let dataChanged = nextProps.data !== this.props.data;
        //let stateChanged = nextState.path.filter(function(node){return !node.isLeafNode}).length != this.state.path.filter(function(node){return !node.isLeafNode}).length;
        //console.log('browser this.state.path: ' + this.state.path);
        //console.log('browser nextState.path: ' + nextState.path);
        //console.log(' browser dataChanged: ' + dataChanged + ' stateChanged: ' + stateChanged);
        //return dataChanged || stateChanged;
        return true;
    },
    render() {
        //console.log('browser render');

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
            navicon = <div className="nav-arrow"></div>;
            navtitle = <span className="nav-title">Home</span>;
            //navtitle = <a className="nav-title" onClick={this.navUp}>Home</a>;
        }

        return <div className="browser browser-panel">
            <div className="menu-navbar">
                {navicon}
                {navtitle}
            </div>

            <SlideTransition selectedId={this.selectedId()} depth={this.filterItems().length} className="items-container">
                {items.map(function(item, index) {
                    let isSelected = this.selectedId() == item.id;
                    console.log("isSelected: " + isSelected);
                    let color = ' color-' + item.color + '-500';
                    let iconClass = "zmdi zmdi-" + item.icon + color;
                    let itemClass = !isSelected ? "item" : "item" + color;
                    if (isSelected) {
                        console.log("name: " + item.name + " iconClass: " + iconClass + " itemClass: " + itemClass);
                    }
                    if (item.children) {

                        return <div className="menu-item"><a className={itemClass} onClick={e => this.navDown(index,item.id)} key={item.name}><i className={iconClass}></i>{item.name}<i className="zmdi zmdi-chevron-right"></i></a></div>;
                    } else {
                        return <div className={itemClass} onClick={e => this.navRoute(event,index,item.id)} data-name={item.name} key={item.name}><i className={iconClass}></i>{item.name}</div>;
                    }
                }.bind(this))}
            </SlideTransition>
        </div>;
    }
});
