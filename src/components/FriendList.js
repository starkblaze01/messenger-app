import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addMessage, setCurrentFriend} from '../actions/chatActions'
import { Row} from 'antd';


class FriendList extends Component {    
    render() {
        const {friendsData} = this.props.chat
        let list = friendsData.map(el => 
            <Row key={friendsData.indexOf(el)} onClick={()=> {this.props.setCurrentFriend(el.name); this.props.changeFriend()}} 
            style={{cursor: 'pointer', border: '2px solid white'}}
            >
                {el.name}
            </Row>
        )
        return (
            <div>
                {list}
            </div>
        );
    }
}

FriendList.propTypes = {
    addMessage: PropTypes.func.isRequired,
    setCurrentFriend: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    chat: state.chat
})

export default connect(mapStateToProps, { addMessage, setCurrentFriend})(FriendList);