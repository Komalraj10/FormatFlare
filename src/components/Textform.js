import React ,{ useState } from 'react'
import { useRef } from 'react';

export default function Textform(props) {
    
    const handleUpClick=()=>{
        //console.log("upper case");
       // setText("YOU HAVE CLICKED ON UPPER CASE ");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to UpperCase","success");
    }
    const handleLowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showalert("Converted to LowerCase","success");
  }
 
  const handleClearclick=()=>{
    let newtext=" ";
    setText(newtext);
    props.showalert("Text Cleared","success");
}
const handleCamelClick = () => {
  const words = text.trim().split(/\s+/);
  let camelCaseText = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    const camelCaseWord =
      i === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1);
    camelCaseText += camelCaseWord;
  }

  setText(camelCaseText);
  props.showalert("Converted to CamelCase","success");
};
 
const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to Clipboard","success");
}

const handleextraspace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Extra Spaces Removed","success");
}
//  const speak = () => {
//         let msg = new SpeechSynthesisUtterance(text);
//         window.speechSynthesis.speak(msg);
//         const toogle = document.getElementById('toggle')
//         if (toogle.textContent == "Speak") {
//             toogle.innerHTML = "Stop"
//         }
//         else {
//             toogle.innerHTML = "Speak"
//             if (toogle.innerHTML = "Speak"){
//                 window.speechSynthesis.cancel()
//             }
//         }
//     }
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
// const cancelSpeech=()=>{
//   speechSynthesis.cancel();
// }
const [listening, setListening] = useState(false);
  const recognition = useRef(null);

  const startListening = () => {
    if (!recognition.current) {
      recognition.current = new window.webkitSpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');

        setText(transcript);
      };

      recognition.current.onend = () => {
        setListening(false);
      };
    }

    recognition.current.start();
    setListening(true);
  };

  const stopListening = () => {
    if (recognition.current) {
      recognition.current.stop();
    }
  };
    const handleOnChange=(event)=>{
       // console.log("upper case on change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    let word=text.split(" ").filter((element)=>{return element.length!==0}).length;
    console.log(word);
    let charNo=text.length;
    if(charNo===0) word=0
    
  return (
    <>
    <div className="container" style={{color:props.mode===`dark`?`white`:`#042743` }}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`?`grey`:`white` ,color:props.mode===`dark`?`white`:`#042743` }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}> to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCamelClick}>  to CamelCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleextraspace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearclick}>Clear Text</button>
        <button  className="btn btn-warning mx-2 my-2" onClick={speak}>Text to Speech</button>
        
        <button className="btn btn-warning mx-2 my-2" onClick={() => startListening()} disabled={listening}>
          SpeechToText
        </button>
        <button className="btn btn-warning mx-2 my-2" onClick={() => stopListening()} disabled={!listening}>
          StopListening
        </button>
       
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?`white`:`#042743` }}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
      <p> Reading time : {0.008*word} minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter something to preview here"}</p>
    </div>
    </>
  )
}
