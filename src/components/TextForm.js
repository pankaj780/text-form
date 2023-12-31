import React,{useState} from 'react'

function TextForm(props) {
 const [text, setText]=useState('');

    const handleOnChange=(event)=>{
      let newText=event.target.value;
      setText(newText);
    }

    const convertText=()=>{
      if(text===text.toUpperCase())
      {
        let convertedUpper=text.toLowerCase();
        setText(convertedUpper);
      }
      if(text===text.toLowerCase())
      {
        let convertedLower=text.toUpperCase();
        setText(convertedLower);
      }
     
    }

    return (
        <div className='container my-3'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="7" onChange={handleOnChange}></textarea>
            </div>
            <div className="mb-3">
            <button type="button" className="btn btn-success" onClick={convertText}>Convert Text</button>
            </div>
            <div>Output: {text}</div>
            <div>Words Count: {text.split(" ").length}</div>
        </div>
    )
}

export default TextForm
