import React, { useState } from 'react'

export default function TextForm(props) {
    //text = 'hello'; This is the wrong method to change the state
    // setText('Enter the text you want to convert');This is the right method to change the state

    const uperCaseHandle = () => {
        console.log('Uppercase was clicked' + text);
        let cnvrt = text.toUpperCase(); 
        setText(cnvrt)//Here setText set the value in the text var It is the method to set the var in states
        props.showAlert('Convert to upper case','success'); 
    }
    const lowerCaseHandle = () => {
        console.log('lowercase was clicked' + text);
        let convert = text.toLowerCase(); 
        setText(convert)//Here setText set the value in the text var It is the method to set the var in states
        props.showAlert('Convert to lower case','success'); 
    }
    const copyToClipboard = () => {
    var text = document.getElementById('TextArea');   
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert('Text copied ','success');   
       
    }
    const rm_extra_spaces = () => {
        let newText = text.split(/[2]+/);
        setText(newText.join(' ')); 
        props.showAlert('Remove extra spaces','success');   
        }
    const total_char = () => {
        console.log('Uppercase was clicked' + text);
        let cnvrt = text.includes(); 
        setText(cnvrt)//Here setText set the value in the text var It is the method to set the var in states
    }
    const total_words = () => {
        console.log('Uppercase was clicked' + text);
        let cnvrt = text.includes(); 
        setText(cnvrt)//Here setText set the value in the text var It is the method to set the var in states
    }
    const handleOnChange = (event) => {
        console.log('On change');
        setText(event.target.value);//This line will help to write in the textarea without this you just see the default value that are in the state variable
    }
    const [text, setText] = useState('');
    //const [name of state var, setText] = useState('Default value that initialize the settext function ');
   
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'grey'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                    <label htmlFor='TextArea' className='Forms'>TextUtils</label>
                    <textarea className="textarea" value={text} onChange={handleOnChange} 
                style={{backgroundColor: props.mode === 'dark'?'white':'grey' , color: props.mode === 'dark'?'white':'white'}} 
                id="TextArea"  cols="150" rows="7"></textarea>
                </div>
                <div >
                <button className="btn btn-primary" style={{border: 'grey',backgroundColor: props.mode === 'dark'?'white':'grey'}} onClick={uperCaseHandle} >Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-3" style={{border: 'grey',backgroundColor: props.mode === 'dark'?'white':'grey'}}onClick={lowerCaseHandle} >Convert to lowercase</button>
                <button className="btn btn-primary mx-3" style={{border: 'grey',backgroundColor: props.mode === 'dark'?'white':'grey'}}onClick={copyToClipboard} >Copy to clipboard</button>
                <button className="btn btn-primary mx-3" style={{border: 'grey',backgroundColor: props.mode === 'dark'?'white':'grey'}}onClick={rm_extra_spaces} >Remove extra spaces</button>
                </div>
       </div>
       <div className="container" style={{color: props.mode === 'dark'?'white':'grey'} }>
           <h3> </h3>
            <p>{text.split(' ').length} No of words <br />{text.length} No of characters </p>
            <p>{0.008 * text.split(' ').length} time taken in read this text</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Write something in the textbox to preview it'}</p>
            
       </div>
       </>
    )
}
//State variable is a var that react automatically watched them 
