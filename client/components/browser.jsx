
Browser = React.createClass({
    getInitialState() {
        return {
            path: [],
            selectedId: ''
        }
    },
    //printState(src) {
    //    console.log('path len: ' + this.state.path.length);
    //},
    navUp() {
        this.currNode().isLeafNode ? this.popNode(2) : this.popNode(1);
        //this._goRoute('');
    },
    navDown(index,id) {
        console.log('navDown id: ' + id);
        this.pushNode(this.newNode(index, id, false));
        console.log('selectedId: ' + this.state.selectedId);
        //this._goRoute('');
    },
    navRoute(e, index,id) {
        console.log('navRoute id: ' + id);
        let name = e.target.dataset.name;
        if (this.currNode() && this.currNode().isLeafNode) {
            this.popNode(1);
        }
        this.pushNode(this.newNode(index, id, true));

        //this._goRoute(name);
        console.log('selectedId: ' + this.state.selectedId);
    },
    newNode(index, id, isLeafNode) {
        return {'index':index, 'id': id, 'isLeafNode': isLeafNode};
    },
    currNode(){
        return this.state.path[this.state.path.length-1];
    },
    popNode(amt,callback){
        //let fun = function(){
        //    if (callback) { callback();}
        //    let id = this.currNode() ? this.currNode().id : '';
        //    console.log('pop set selectedId to id: ' + id);
        //    this.setState({selectedId: id},function(){console.log('pop selectedId: ' + this.state.selectedId);});
        //}
        //this.setState({path: this.state.path.slice(0, -1*amt)},fun);
        this.setState({path: this.state.path.slice(0, -1*amt)});
    },
    pushNode(node){
        this.setState({path: this.state.path.concat([node])});
        this.setState({selectedId: node.id});
    },

    _goRoute(name){
        //console.log('goroute');
        //FlowRouter.go('/'+name);
    },
    //filterItems(){
    //    return this.state.path.filter(function(node){return !node.isLeafNode});
    //},
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
        let filteredItems = this.state.path.filter(function(node){return !node.isLeafNode});
        let selectedId = this.state.path.length > 0 ? this.state.path[this.state.path.length-1].id : '';
        console.log('render selectedId: ' + selectedId);
        let parent = {};

        const items = filteredItems.reduce(function(items, key) {
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

            <SlideTransition selectedId={selectedId} depth={filteredItems.length} className="items-container">
                {items.map(function(item, index) {
                    let isSelected = selectedId == item.id;
                    //console.log("isSelected: " + isSelected);
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
