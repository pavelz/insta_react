import {
    ADD_VIDEO,
    DELETE_VIDEO,
    UPDATE_STATUS

} from './VideoActions'

const reducer = (state = {}, action) => {
    switch(action) {
        case ADD_VIDEO:
            return Object.assign({}, state, {
            });
        case UPDATE_STATUS:
            console.log("Update status triggered")
            return Object.assign({}, state, {
                status: action.status
            })
    }
}

export default reducer
