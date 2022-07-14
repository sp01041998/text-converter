import React , {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }


    const handleClearClick = () => {
        let newText = ""

        setText(newText)
        props.showAlert("Text area cleared!", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard!", "success")
    }

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

   

    const [text, setText] = useState("")

    const textLength = (text) => {
      text = text.split(" ")
      let wordCount =0
      let charCount = 0

      for(let el of text){
        if(el.length > 0){
          charCount =charCount + el.length
          wordCount++
        }
      }
      let obj = {}
      obj.wordCount=wordCount
      obj.charCount=charCount
      return obj

    }

  return (
    <>
    <div className="container"  style={{color : props.mode==='dark' ? 'white' : '#0c141c'}}>  
      <h1>{props.heading}</h1>  
      <div className="mb-3">

        <textarea
          className="form-control"
          style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white', color : props.mode==='dark' ? 'white' : '#0c141c'}}
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color : props.mode==='dark' ? 'white' : '#0c141c'}}>
        <h2>Your text summary</h2>
        <p>{textLength(text).wordCount} words {textLength(text).charCount} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in Text Box Above to preview it here" }</p>
    </div>
    </>
  );
}
