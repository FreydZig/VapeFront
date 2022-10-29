import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { commentCreate } from '../redux/actions';
import SingleComment from './SingleComment';

const Coments = (props) => {

    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const {commentReducer} = state;
        return commentReducer;
    })
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const id = textComment;
        dispatch(commentCreate(textComment, id));
    }

    return (
        <Card>
            <Form onSubmit={handelSubmit}>
                <input type='text' value={textComment} onChange={handleInput}/>
                <input type='submit' hidden/>
            </Form>
            {!!comments.length && comments.map(res => {
                return <SingleComment key={res.id} data={res}/>
            })}    
        </Card>
    );
};

export default Coments;