const styles = {
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f2f2f2'
    }

}


Container = React.createClass({
    render(){
        return <div style={styles.content}>
            <div >
                {this.props.content}
            </div>
        </div>
    }
});