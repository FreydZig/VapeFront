import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const SingleComment = ({data}) => {
    const [commentText, setCommentText] = useState('');
    const {text, id} = data;

    useEffect(() => {
        if(text){
            setCommentText(text);
        }
    }, [text])
    console.log('dwadawd')
    return (
        <Form>
            <div>&times;</div>
            <input type='text'value={commentText}/>
            <input type='submit' hidden/>
        </Form>
    );
};

export default SingleComment;