const {CSSTransitionGroup} = React.addons;

SlideTransition = React.createClass({
    propTypes: {
        depth: React.PropTypes.number.isRequired,
        name: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            name: 'slider',
        };
    },
    getInitialState() {
        return {direction: 'right'};
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        let depthChanged = nextProps.depth !== this.props.depth;
        let directionChanged = nextState.direction !== this.state.direction;
        console.log('depthChanged: ' + depthChanged + ' directionChanged: ' + directionChanged);
        return depthChanged || directionChanged;
    },
    componentWillReceiveProps(newProps) {
        const direction = newProps.depth >= this.props.depth ? 'right' : 'left';
        this.setState({direction});
    },
    render() {
        console.log('slider render');
        const {name, depth} = this.props;
        const outerProps = {
            className: `${name}-outer-wrapper ${this.props.className}`,
        };
        const transProps = {
            component: 'div',
            transitionName: `${name}-${this.state.direction}`,
            className: `${name}-transition-group`,
        };
        const innerProps = {
            ref: 'inner',
            key: depth,
            className: `${name}-inner-wrapper`,
        };

        return <div {...this.props} {...outerProps}>
            <CSSTransitionGroup {...transProps}>
                <div {...innerProps}>
                    {this.props.children}
                </div>
            </CSSTransitionGroup>
        </div>;
    }
});
