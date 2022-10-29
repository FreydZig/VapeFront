import { COMMET_CREATE } from "../typs"

const initialState = {
    comments: []
}

export const commentReducer = (state = initialState, action) => {
    switch(action.type){
        case COMMET_CREATE:{
            console.log(action.data)
            return{
                ...state,
                comments: [...state.comments, action.data]
            }
        }

        default: return state;
    }
}