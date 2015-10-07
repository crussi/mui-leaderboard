const {
    List,
    ListItem,
    ListDivider,
    Avatar

    } = mui;
const styles = {
    list: {
        marginRight: '60px'
    }
}

InboxList = React.createClass({
    propTypes: {
        selectedItemId: React.PropTypes.string
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            inboxItems: Inbox.find({}, { sort: { dateCreated: 1, description: 1 } }).fetch()
        }
    },
    selectItem(itemId) {
        console.log('selectItem itemId: ' + itemId);
        //this.props.onItemSelected(itemId);
    },
    render() {
        let listStyle = this.props.style ?
            update(styles.list, {$merge: this.props.style}) :
            styles.list;

        return <div style={listStyle}>
            <List>{
                this.data.inboxItems.map((item) => {
                    let style = {};
                    if (this.props.selectedItemId === item._id) {
                        style["backgroundColor"] = "#eee";
                    }
                    let today = moment(new Date().toJSON().slice(0,10));
                    let days = today.diff(item.dateCreated,'days');
                    console.log('today: ' + today);
                    console.log('days: ' + days);
                    return [
                        <ListItem key={ item._id }
                                  primaryText={ item.description }
                                  onClick={ this.selectItem.bind(this, item._id) }
                                  leftAvatar={ <Avatar>{days}</Avatar> }
                                  secondaryText={ "Created on: " + item.createdAt }
                                  style={style}/>,
                        <ListDivider/>
                    ]
                })
            }</List>
        </div>
    }
});