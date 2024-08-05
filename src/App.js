import React, { useState } from 'react'
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

function App() {
  const [copyText,setCopyText] = useState();
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const [isCopied, setCopied] = useClipboard(copyText, {
    successDuration:1000
});
  
  const startListning = () => SpeechRecognition.startListening({ continuous: true })
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return ( 
    <>
       <div className="container">
        <h2>Audio to Speech converter</h2>
        <br />
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Autem est adipisci praesentium, itaque iusto dolor, cum, magni alias placeat hic iste. Ipsa 
          voluptatibus amet fugiat, provident illo modi. Harum, saepe!
        </p> */}
        <div className="main-content" onClick={() => setCopyText(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
        <button onClick={setCopied}>
        {isCopied ? 'Copied!' : 'Copy to clipboard'}
    </button>
          <button onClick={startListning}>start</button>
          <button onClick={SpeechRecognition.stopListening}>stop</button>
        </div>
       </div>
    </>
  )
}

export default App
