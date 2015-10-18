Actionable = React.createClass({
    handleClick(val){
        console.log('Actionable.' + val);
        this.props.callback('Actionable.' + val);
    },
    render(){
        return <MultiStepYesNo question="Is this actionable?" callback={this.handleClick}/>
    }
});