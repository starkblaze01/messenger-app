import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row} from 'antd';

class Chat extends Component {
    
    render(){
    const allFriends = this.props.chat.friendsData
    let mes = allFriends.filter(el => el.name === this.props.chat.currentFriend)
    // console.log(mes)
    let message = mes[0] && mes[0].messages ? mes[0].messages.map(el =>
        <Row key={mes[0].messages.indexOf(el)} style={{ display: 'flex', justifyContent: 'flex-end', margin: '4px 0' }}>
            <span style={{ border:'2px solid blue', borderRadius: '20px', padding: '0 10px' }}>
                {el}
            </span>
        </Row>
        ) : ''
    return (
        <div style={{overflow: 'scroll', height: '600px'}}>
            {message}
        </div>
    );
    }
}

const mapStateToProps = state => ({
    chat: state.chat,    
})
export default connect(mapStateToProps)(Chat);