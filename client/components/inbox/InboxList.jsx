const {
    List,
    ListItem,
    ListDivider,
    Avatar

    } = mui;
const styles = {
    list: {
        marginRight: '120px'
        //marginLeft: '10px'
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
            {
                this.data.inboxItems.map((item) => {
                    let style = {
                        paddingTop:'10px',
                        paddingBottom:'10px'
                    };
                    let avatarStyle = {
                        fontSize:'20px'
                    }
                    if (this.props.selectedItemId === item._id) {
                        style["backgroundColor"] = "#eee";
                    }
                    let today = moment(new Date().toJSON());
                    let days = today.diff(item.dateCreated,'days');
                    let secondaryText = moment(item.dateCreated).fromNow();
                    //console.log('today: ' + today);
                    //console.log('days: ' + days);
                    console.log('inboxList item.description: ' + item.description);
                    return [
                        //<ListItem key={ item._id }
                        //          primaryText={ item.description }
                        //          onClick={ this.selectItem.bind(this, item._id) }
                        //          leftAvatar={ <Avatar style={avatarStyle}>{days}</Avatar> }
                        //          secondaryText={ "Entered " + secondaryText }
                        //          style={style}/>,
                        //<ListDivider/>
                        <CollapseCard key={ item._id }
                          primaryText={ item.description }
                          //onClick={ this.selectItem.bind(this, item._id) }
                          avatar={ <Avatar style={avatarStyle}>{days}</Avatar> }
                          secondaryText={ "Entered " + secondaryText }
                          content={<MultiStep nextstep={this.props.nextstep}/>}
                          />,
                        //<ListDivider/>
                    ]
                })
            }
        </div>
    }
});