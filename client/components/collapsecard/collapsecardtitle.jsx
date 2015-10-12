CollapseCardTitle = React.createClass({
    render: function () {
        return (
            <div>
                <h4 className="collapse-card__title">
                    <i className="fa fa-question-circle fa-2x fa-fw"></i>
                    {this.props.title}
                </h4>
            </div>
        );
    }
});