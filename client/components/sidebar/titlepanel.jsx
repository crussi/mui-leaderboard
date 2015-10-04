const update = React.addons.update;

const styles = {
    root: {
        fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
    },
    header: {
        backgroundColor: '#03a9f4',
        color: 'white',
        padding: '16px',
        fontSize: '1.5em',
        top: '0',
        position: 'fixed',
        width: '100%'
    },
    content: {
        marginTop: '54px',
        padding: '16px',
    },
};

TitlePanel = React.createClass({
    render() {
        let rootStyle = this.props.style ?
            update(styles.root, {$merge: this.props.style}) :
            styles.root;

        return (
            <div style={rootStyle}>
                <div style={styles.header}>{this.props.title}</div>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }

});