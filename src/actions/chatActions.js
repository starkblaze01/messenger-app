import { ADD_MESSAGE, SET_CURRENT_FRIEND} from './types';

export const addMessage = (data) => (dispatch, getState) => {
    console.log('hey there', getState().chat.friendsData)
    let arr = getState().chat.friendsData;
    let index = arr.indexOf(getState().chat.currentFriend) > 0 ? arr.indexOf(getState().chat.currentFriend) : 0
    arr[index].messages.push(data)
    
    dispatch({
        type: ADD_MESSAGE,
        payload: arr
    })
    dispatch(setCurrentFriend(arr[index]))
}

export const setCurrentFriend = (chat) => dispatch => {
    dispatch({
        type: SET_CURRENT_FRIEND,
        payload: chat,
    })
}