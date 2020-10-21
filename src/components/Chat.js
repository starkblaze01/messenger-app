import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row} from 'antd';

class Chat extends Component {
    
    render(){
    const currentFriend = this.props.chat.currentFriend
    let message = currentFriend && currentFriend.messages ? currentFriend.messages.map(el =>
        <Row key={currentFriend.messages.indexOf(el)} style={{ display: 'flex', justifyContent: 'flex-end', margin: '4px 0' }}>
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