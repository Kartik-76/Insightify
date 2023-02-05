import React, {useState} from 'react'


export default function TextForm(props) {
    //Logic to convert text into upper case
    const handleUpClick = () =>{
        // console.log("Uppercase Opearion Invoked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    //Logic to convert text into lower Case
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }

    //Logic for Clearing Text Area
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Textarea cleared", "success")
    }

    //Logic for copying text into clipboard
    const handleCopyTextClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text successfully copied", "success")
        // alert("Text Copied: "+ copiedText.value);
    }

    //logic for reversing the text
    const handleReverseTextClick = () =>{
        let textarea = document.getElementById("myBox");
        let text = textarea.value;
        let reversetext = text.split("").reverse().join("");
        setText(reversetext);
        props.showAlert("Text Reversed", "success")
    }

    //logic for converting text into wide or full width text
    const handleWideTextClick = () =>{
        let textarea = document.getElementById("myBox");
        let text = textarea.value;
        let widetext = text.split("").map(function(c){
            return String.fromCharCode(c.charCodeAt(0)+65248);
        }).join('');
        setText(widetext);
        props.showAlert("Text converted into full width text", "success")
    }

    //logic for handling extra spaces
    const handleExtraSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaced cleared", "success")
    }


    const handleOnChange = (event)=>{
        // console.log("Onchanges Handle");
        setText(event.target.value);
    }


    const [text, setText] = useState("");
    //text = "new text"  --> Wrong way to change the state  
    //setText("new text") // --> correct way to change the state  

     return (
        
        <>
        <div className='container' style={{color: props. mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props. mode==='dark'?'#13466e':'white', color: props. mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyTextClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverseTextClick}>Reverse Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleWideTextClick}>Wide Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3 " style={{color: props. mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} char, </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
            <h3>Preview </h3>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
  )
}
