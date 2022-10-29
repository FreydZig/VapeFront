import React from 'react';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { decrementLikes, incrementLikes } from '../redux/actions';

const Likes = (props) => {
    console.log(props);
    return (
        <div className='m-5'>
            <Button onClick={props.onIncrementLikes}>♥ {props.likes}</Button>
            <Button onClick={props.onDecrementLikes}>Dislike</Button>
        </div>
    );
};

function mapStateToProps(state) {
    const { likesReducer } = state;
    return{
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onIncrementLikes: () => {
            return dispatch(incrementLikes())
        },
        onDecrementLikes: () => {
            return dispatch(decrementLikes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Likes);