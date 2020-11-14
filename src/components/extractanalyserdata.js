import React from 'react'

class extractData{

    constructor(analyserData){ 
      this.analyserData = `${analyserData} `
      this.huntData = {}
      
      this.generateExtractedData()
    }

    generateExtractedData(){
      this.extractSessionData()
    }   


    extractSessionData(){
      let indexStart = this.analyserData.indexOf('Session:') + 8

      let sessionData = this.analyserData.substr(indexStart, 7).trim()

      this.huntData.sessionDuration = sessionData
    }


     getStringBetween(string, start, end){

      let initial = string.indexOf(start)
      if(initial < 0 ) return ''
      let final = string.indexOf(end)
      let len = Math.abs(initial - final) - start.length                                

      return string.substr( initial + start.length , len).trim()

    }







    getExtractedData(){
      let teste = this.analyserData.match("Loot:(.*)Supplies:")
      return teste[1]
    }

}

export default extractData