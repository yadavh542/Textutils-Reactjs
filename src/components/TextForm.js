import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        //  console.log("Uppercase was clicked" + text);
          let newText = text.toUpperCase();
          setText(newText)
          props.showAlert("Converted to upercase!", "success");
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = ()=>{
       let newText = "";
       setText(newText)
       props.showAlert("Screen is Cleared", "success");
    }

    const handleFirstPosClick = ()=>{
        let newText = text.charAt(9);
        setText(newText)
    }

    const handleCopy = ()=>{
      //  let text = document.getElementById("myBox");
      //  text.select();
        navigator.clipboard.writeText(text);
      //  document.getSelection().removeAllRanges();
        props.showAlert("Text is Copied to Clipboard !", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces !", "success");
    }

    const handleOnChange = (event)=>{
          //console.log("on change");
          setText(event.target.value)
    }
    const [text, setText] = useState(''); 

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>    
  <div className="mb-3">
  <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black' }} value={text} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Screen</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleFirstPosClick}>Show 10th Character</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes Read Time</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    );
}
