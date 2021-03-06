
CollapseCardBody = React.createClass({
    propTypes: {
        slideDirection: React.PropTypes.string.isRequired
    },
    getDefaultProps() {
        return {
            slideDirection: 'up'
        };
    },
    getInitialState() {
        return {
            slideDirection: 'up'
        };
    },
    componentWillReceiveProps: function(nextProps) {
        if (nextProps.slideDirection !== this.props.slideDirection) {
            this.setState({ slideDirection: nextProps.slideDirection });
            let $el = $(this.getDOMNode());
            switch (nextProps.slideDirection.trim()) {
                case 'up':
                    $el.slideUp('animationDuration: 400');
                    break;
                case 'down':
                    $el.slideDown('animationDuration: 400');
                    break;
                default:

            }

        }
    },
    shouldComponentUpdate(nextProps, nextState){
        let directionChanged = nextState.slideDirection !== this.state.slideDirection;
        return directionChanged;
    },
    render: function () {
        return (

            <div className="collapse-card__body">
                {this.props.children}
            </div>

        );
    }
});