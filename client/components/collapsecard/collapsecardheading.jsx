CollapseCardHeading = React.createClass({
    handleClick(e) {
        e.preventDefault();
        console.log('heading handleClick');
        this.props.headingClicked();
    },
    render: function () {

        return (
            <div className="collapse-card__heading" onClick={this.handleClick}>
                <CollapseCardTitle title={this.props.title} />
            </div>
        );
    }
});