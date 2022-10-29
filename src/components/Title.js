import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../redux/actions';

const Title = (props) => {

    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text;
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log('handle > ', e.target.value);
        dispatch(inputText(e.target.value));
    }

    return (
        <Card>
            <input type='text' onChange={handleChange}/>
            <p>{text}</p>
        </Card>
    );
};

export default Title;