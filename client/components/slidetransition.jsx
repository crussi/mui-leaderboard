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
    componentWillReceiveProps(newProps) {
        const direction = newProps.depth > this.props.depth ? 'right' : 'left';
        this.setState({direction});
    },
    render() {
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
