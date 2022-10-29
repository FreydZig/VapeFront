import { INCREMENT, DECREMENT, INPUT_TEXT, COMMET_CREATE } from "./typs";

export function incrementLikes(){
    return{
        type: INCREMENT
    }
}

export function decrementLikes(){
    return{
        type: DECREMENT
    }
}

export function inputText(text){
    return{
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id){
    return{
        type: COMMET_CREATE,
        data: {text, id}
    }
}