import React, { useState } from 'react'
import "./Input.css"

function Input(props) {
    const {inputText, onChange, onClick} = props;

    return (
        <div className='input'>
        <input 
            placeholder='メッセージを入力して送信'
            type='text'
            value={inputText}
            onChange={onChange}
        ></input>
        <button onClick={onClick} >送信</button>
        </div>
    )
}

export default Input
