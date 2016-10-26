import { UPDATE_DATA, SET_DATA, API_ERROR } from '../actions/actionTypes';

const initialState = {
    datas: [],
    setData: {
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
                setData: {
                    id: action.id,
                    title: action.title,
                    thumbnail: action.thumbnail,
                    source: action.source
                }
            })
        default:
            return state;
    }
}

export default rootReducer;
