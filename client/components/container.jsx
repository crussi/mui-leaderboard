Container = React.createClass({
    render(){
        return <div>
            <h1>Hello, {this.props.name}</h1>
            {this.props.children}
        </div>
    }
});