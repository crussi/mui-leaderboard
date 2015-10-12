
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
                    this.getDOMNode().style.height = '0px';
                    this.getDOMNode().style.display = 'none';
                    break;
                case 'down':
                    $el.slideDown('animationDuration: 400');
                    this.getDOMNode().style.height = '200px';
                    this.getDOMNode().style.display = 'block';
                    break;
                default:

            }

        }
    },
    shouldComponentUpdate(nextProps, nextState){
        let directionChanged = nextState.slideDirection !== this.state.slideDirection;
        console.log('cardbody shouldComponentUpdate: ' + directionChanged);
        return directionChanged;
    },
    render: function () {
        //let divStyle = this.state.slideDirection.trim() == 'up' ? {height: 0} : {height: 100};
        //let bodyStyle = 'collapse-card__wrapper-' + this.state.slideDirection.trim();
        //console.log('bodyStyle: ' + bodyStyle);
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