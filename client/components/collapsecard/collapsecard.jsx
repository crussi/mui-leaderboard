
CollapseCard = React.createClass({
    getInitialState(){
        return {
            active: false,
            slideDirection: "up"
        }
    },
    headingClicked(){
        //console.log('card headingClicked');
        this.setState({ active: !this.state.active });
    },
    render: function () {
        //console.log('this.state.active: ' + this.state.active);
        let cardClass = "collapse-card" + (this.state.active ? " active" : "");
        let slideDirection = this.state.active ? " down" : "up";
        //console.log('cardClass: ' + cardClass);
        //console.log('slideDirection: ' + slideDirection);

        let headingProps = {
            primaryText: this.props.primaryText,
            secondaryText: this.props.secondaryText,
            avatar: this.props.avatar
        };
        return (
            <div className={cardClass}>
                <CollapseCardHeading {...headingProps} headingClicked={this.headingClicked} />
                <CollapseCardBody slideDirection={slideDirection}>
                    {this.props.content}
                </CollapseCardBody>
            </div>
        );
    }
});


//React.render(
//    <CollapseCard title="Well, hello there"/>,
//
//    document.getElementById('content')
//);