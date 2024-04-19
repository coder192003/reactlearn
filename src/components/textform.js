import React from 'react';
import { useState } from 'react';
import { BiTrash, BiCopy, BiClipboard } from "react-icons/bi";


export default function TextForm(props)
{
    const [text, setText] = useState('');
    const handleUpclick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase","danger")
    };

    const handleLoclick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase","primary")
    };

    const handledelete = () => {
        setText('');
        props.showAlert("Text deleted","danger")
    };
    const handleOnchange = (event) => {
        setText(event.target.value)
    };

    const handlecopy= async () => {
        try {
            await navigator.clipboard.writeText(text);
            props.showAlert("Copied text","warning")
        }
        catch(err)
        {
        console.error('Failed to copy text',err);
        }
    };

    const handlepaste = async () => {
        try{
           const clipboardtext= await navigator.clipboard.readText();
            setText(clipboardtext);
            props.showAlert("Pasted text","info")
        }
        catch(err)
        {
            console.error('Failed to paste text',err);
        }
    };

    return (
        <>
           <div className='container mb-3'>
                <label for="mytext" className="form-label">Input :</label>
                <textarea className='form-control rounded-0' value={text} rows='5' onChange={handleOnchange} ></textarea>
            </div>
            <button className='btn btn-success rounded-0' onClick={handleUpclick}>UpperCase</button>
            <button className='btn btn-primary m-2 rounded-0' onClick={handleLoclick}>LowerCase</button>
            <button className='btn btn-danger m-2 rounded-0' onClick= {handledelete}><BiTrash/></button>
            <button className='btn btn-warning m-2 rounded-0' onClick={handlecopy}> <BiCopy/></button>
            <button className='btn btn-secondary rounded-0' onClick={handlepaste}> <BiClipboard/></button>
            <div className='container'>
                <h2><i>Text Summary</i></h2>
                <p> {text.length===0?0:text.split(' ').length} words <br/>
                    {text.length} characters</p>
            </div>            
        </>
    );
} 