// import React, {useState} from "react";

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color : 'black',
    //         backgroundColor : 'white'
    //     }
    // )

    let myStyle = {
      color : props.mode === 'dark' ? "white" : "#042743",
      backgroundColor : props.mode === 'dark' ? 'rgb(53 73 166 / 1%)' : 'white'
    }

    

  return (
    <div className="container" style = {myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text - Converter gives you a way to analyze your text very quickly and effectively.Be it word cound or character count or any any function,gives you very fast response.
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             Text Converter us free to use website that provides instant character count, word count and even you can copy your text with just one click.
             Thus it is suitable for writing text where words/characters are limited
            </div>
          </div>
        </div>
        <div className="accordion-item" style = {myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>About Creater</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
             This website is created by Mr. Shreyash Patel.He was born and raised in Varanasi, Uttar Pradesh.He completed is graduation from NIT ROurkela in Electrical Engineering.Currently, He is looking for a job role in Backend development/web Development.
            </div>
          </div>
        </div>
      </div>
      <div classNameName="container my-3">

      {/* <button type="button" className="btn btn-primary my-3"  onClick={toggleColor}>{btnText}</button> */}

      </div>
      
    </div>
  );
}
