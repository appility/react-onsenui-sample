import { UPDATE_DATA, SET_DATA, API_ERROR } from '../actions/actionTypes';

const initialState = {
    datas: [],
    detail: {
        id: 0,
        title: '',
        thumbnail: '',
        source: ''
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DATA:
            console.log('UPDATE_DATA', action);
            return Object.assign({}, state, {
                datas: action.payload
            })
            break;
        case SET_DATA:
            console.log('SET_DATA', action);
            return Object.assign({}, state, {
                detail: {
                    id: action.payload.item.id,
                    title: action.payload.item.title,
                    thumbnail: action.payload.item.thumbnail,
                    source: action.payload.item.source
                }
            })
        default:
            return state;
    }
}

export default rootReducer;
