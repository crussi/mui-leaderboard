const {
    List,
    ListItem,
    ListDivider,
    Avatar

    } = mui;

InboxList = React.createClass({
    propTypes: {
        selectedItemId: React.PropTypes.string
    },
    mixins: [ReactMeteorData],
    getMeteorData() {
        return {
            inboxItems: Inbox.find({}, { sort: { createdAt: -1, description: 1 } }).fetch()
        }
    },
    selectItem(itemId) {
        console.log('selectItem itemId: ' + itemId);
        //this.props.onItemSelected(itemId);
    },
    render() {
        return <div className="">
            <List>{
                this.data.inboxItems.map((item) => {
                    let style = {};
                    if (this.props.selectedItemId === item._id) {
                        style["backgroundColor"] = "#eee";
                    }

                    return [
                        <ListItem key={ item._id }
                                  primaryText={ item.description }
                                  onClick={ this.selectItem.bind(this, item._id) }
                                  leftAvatar={ <Avatar src={ "/Ada Lovelace.png" }/> }
                                  secondaryText={ "Created on: " + item.createdAt }
                                  style={style}/>,
                        <ListDivider/>
                    ]
                })
            }</List>
        </div>
    }
});