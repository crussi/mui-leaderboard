
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

        const items = path.reduce(function(items, key) {
            return items[key].children;
        }, this.props.items);

        return <div className="browser">
            <h3>{path.length > 0 ? <a onClick={this.navUp}><i className="zmdi zmdi-chevron-left"></i>Back</a> : 'Home'}</h3>

            <SlideTransition depth={path.length} className="items-container">
                {items.map(function(item, index) {
                    if (item.children) {
                        return <div className="menu-item"><a className="item" onClick={e => this.navDown(index)} key={item.name}>{item.name}</a><i className="zmdi zmdi-chevron-right"></i></div>;
                    } else {
                        return <div className="item" key={item.name}>{item.name}</div>;
                    }
                }.bind(this))}
            </SlideTransition>

        </div>;
    }
});
