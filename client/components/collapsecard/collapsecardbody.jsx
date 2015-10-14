
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
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </div>

        );
    }
});