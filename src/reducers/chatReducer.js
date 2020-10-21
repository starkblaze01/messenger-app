import {ADD_MESSAGE, SET_CURRENT_FRIEND} from '../actions/types';

const initialState ={
    friendsData: [ {
            name: 'Katy',
            messages: ['Hi There', 'Blah', 'ya hoo']
        },{
            name: 'Matt',
            messages: ['Yo!', 'Sup?', 'Not so Good']
        }, {
            name: 'Daniel',
            messages: ['Hi There', 'Hello', 'See you soon']
        }, {
            name: 'Mayank',
            messages: ['Yo!', 'Sup?', 'So what\'s next?', 'Huh?']
        },
        {
            name: 'Jennifer',
            messages: ['Hi There', 'Hello']
        }, {
            name: 'Ali',
            messages: ['Yo!', 'Sup?']
        },
        {
            name: 'Akash',
            messages: ['Hi There', 'Hello']
        }, {
            name: 'Shivam',
            messages: ['Yo!', 'Sup?']
        }
    ],
    currentFriend: {
        name: 'Katy',
        messages: ['Hi There', 'Blah', 'ya hoo']
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                friendsData: action.payload
            }
        case SET_CURRENT_FRIEND:
            return{
                ...state,
                currentFriend: action.payload
            }    
        default:
            return state;    
    }
}