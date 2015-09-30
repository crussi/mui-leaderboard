

BrowserItem = React.createClass({
    getInitialState() {
        return {
            isSelected: false
        }
    },
    navDown(index) {
        this.props.callbackParent(newState);
    },
    render() {
        console.log('BrowserItem render');
        let item = this.props.item;
        let index = this.props.index;
        console.log('item.name: ' + item.name);
        let color = ' color-' + item.color + '-500';
        let iconClass = "zmdi zmdi-" + item.icon + color;
        //let isSelected = index == path[path.length-1];
        let itemClass = "item "; //+ (isSelected ? color : "");
        console.log('itemClass: ' + itemClass);

        if (item.children) {
            return <div className="menu-item"><a className={itemClass} onClick={e => this.navDown(index)} key={item.name}><i className={iconClass}></i>{item.name}</a><i className="zmdi zmdi-chevron-right"></i></div>;
        } else {
            return <div className={itemClass} key={item.name}><i className={iconClass}></i>{item.name}</div>;
        }
    }
});