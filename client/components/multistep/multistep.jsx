MultiStep = React.createClass({
    getInitialState() {
        return {
            key: "MultiStep.Expand"
        }
    },
    componentWillMount(){
        console.log('componentWillMount');
        //
        //React.render(<Actionable callback={this.handleClick} />, document.getElementById("multi-step-container"));

    },
    handleClick(val){
        console.log('MultiStep: ' + val);
        //console.log(this.props.nextstep["Actionable.Yes"]);
        this.setState({ key: val });
    },
    render(){
        let key = this.state.key;
        console.log('multistep render key: ' + key);
        console.dir(this.props.nextstep[key]);
        console.dir(this.props.nextstep[key].nextstep);
        let comp = this.props.nextstep[key].nextstep.component;
        console.dir(comp);
        return <div>
            {comp}
        </div>
    }
});