import React from 'react'
import {useState} from 'react'
import extractData from './components/extractanalyserdata'


function App() {
  const [analyserData, setAnalyserData] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    
    const extractedData = new extractData(analyserData)

    extractedData.extractPlayersName()
    
  }

  
  return (
    <>
      <h1>Tibia hunt calculator</h1>

      <form  onSubmit={handleSubmit}>
        <textarea onChange={e => setAnalyserData(e.target.value)}>

        </textarea>
        <input type="submit" value="Calcular" />
      </form>
      <div></div>

     

   </>
  );
}
export default App;
