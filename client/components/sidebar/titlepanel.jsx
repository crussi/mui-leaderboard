const update = React.addons.update;

const styles = {
    root: {
        fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
        fontWeight: 300,
        height: '100%',
        width: '100%'
    },
    header: {
        backgroundColor: '#03a9f4',
        //boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        boxShadow: '0 0 4px rgba(0,0,0,.14),-4px 4px 8px rgba(0,0,0,.28)',
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
        backgroundColor: '#f2f2f2',
        height: '100%',
        width: '100%'
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