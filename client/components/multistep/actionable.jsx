Actionable = React.createClass({
    handleClick(val){
        console.log('parent: ' + val);
    },
    render(){
        return <MultiStepYesNo question="Is this actionable?" callback={this.handleClick}/>
    }
});