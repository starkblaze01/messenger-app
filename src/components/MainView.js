import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chatActions';
import FriendList from './FriendList';
import Chat from  './Chat'

const { TextArea } = Input;

class MainView extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentMessage: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(){
        this.props.addMessage(this.state.currentMessage)
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <Row gutter={3} style={{ height: '100vh' }} >
                        <Col span={8}>
                            <div>Friend's List</div>
                            <FriendList />
                        </Col>
                        <Col span={16}>
                            <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '85%'}}>
                                <div>{this.props.chat.currentFriend.name}</div>
                                <Chat />
                            </Row>
                            <Row style={{ bottom: '0', position:'absolute', display: 'flex', justifyContent: 'flex-end', width:'100%'}}>
                                <Col style={{ width: '80%' }}>
                                    <TextArea
                                        name="currentMessage"
                                        rows={4}
                                        onChange={(e) => this.onChange(e)}
                                        value={this.state.currentMessage}
                                        placeholder="Type your message here"
                                    />
                                </Col>
                                <Col>
                                    <Button type="primary" shape="round" onClick={() => this.onSubmit()}>Send Message</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </header>
            </div>
    
        );
    }
}

MainView.propTypes = {
    addMessage: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    chat: state.chat
})


export default connect(mapStateToProps, { addMessage} )(MainView);