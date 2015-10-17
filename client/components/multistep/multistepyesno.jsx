const {
    FlatButton,
    RaisedButton
} = mui;

const styles = {
    step: {
        marginLeft: '55px'
    },
    question: {
        fontSize: '1rem;',
        fontWeight: 'bold',
        paddingTop: '20px',
        paddingBottom: '20px',
        marginRight: '10px'
    },
    button: {
        margin: '10px'
    }


};

MultiStepYesNo = React.createClass({
    handleClick(val){
        console.log('yesno val: ' + val);
        this.props.callback(val);
    },
    render(){
        let stepStyle = styles.step;
        let questionStyle = styles.question;
        let buttonStyle = styles.button;
        let clear = {clear:'both'};
        return <div style={stepStyle}>

            <span style={questionStyle}>{this.props.question}</span>

                <FlatButton style={buttonStyle}  label="Yes" onClick={e => this.handleClick("Yes")}/>
                <FlatButton style={buttonStyle}  label="No" onClick={e => this.handleClick("No")}/>

            <div style={clear}></div>
        </div>
    }
});