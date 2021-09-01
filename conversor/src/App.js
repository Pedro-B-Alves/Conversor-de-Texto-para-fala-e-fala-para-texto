import './App.css';
import './img/microfone.png';
import './img/audio.png';
import React, { useState} from 'react';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";

export default function App() {
  const [ texto, setTexto ] = useState( '' );
  
  function falar(){

    function synthesizeSpeech() {
      const speechConfig = sdk.SpeechConfig.fromSubscription("<paste-your-speech-key-here>", "Brazil South");
    }
  
    synthesizeSpeech();

    console.log("falar");
  }

  function ouvir(){

    console.log("ouvir");
  }

  return (
    <div className="App">
      <div className="Cabecalho">
        <p className="CabecalhoTxt">Conversor</p>
      </div>
      <div className="Organizacao">
        <input className="Input" type="text" value={texto} onChange={(event) => setTexto(event.target.value)} placeholder="Digite um texto"/>
        <div className="OrganizacaoBt">
          <button className="BtMicro" onClick={falar} type="button"/>
          <button className="BtAud" onClick={ouvir} type="button"/>
        </div>
      </div>
    </div>
  );
}
