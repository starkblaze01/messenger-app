import { ADD_MESSAGE, SET_CURRENT_FRIEND} from './types';

export const addMessage = (data) => (dispatch, getState) => {
    console.log('hey there', getState().chat.friendsData)
    let arr = getState().chat.friendsData;
    let msg = arr.find(el => el.name === getState().chat.currentFriend)
    let index = arr.indexOf(msg)
    // console.log(msg, index)
    arr[index].messages.push(data)
    
    dispatch({
        type: ADD_MESSAGE,
        payload: arr
    })
}

export const setCurrentFriend = (chat) => dispatch => {
    dispatch({
        type: SET_CURRENT_FRIEND,
        payload: chat,
    })
}