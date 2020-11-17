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
      let sessionData = this.getStringBetween(this.analyserData, 'Session:', 'Loot Type:').trim()
      this.huntData.sessionDuration = sessionData
    }

    extractNumberOfPlayers(){
      let analyserData = this.removeFirstSection()
      return analyserData.split('Balance:').length - 1
    }

    // extractHuntData(){
    //   let numberOfPlayers = this.extractNumberOfPlayers()
    //   let analyserData = this.removeFirstSection()
    //   let firstPlayer = this.extractFirstPlayerName()
    //   let playersData = analyserData.substr(analyserData.indexOf(firstPlayer), analyserData.length )      
    //   this.huntData.playersdata = []
    //   for(let i = 1; i <= numberOfPlayers; i++ ){
    //     let name = playersData.substr(0, playersData.indexOf('Loot:')).trim()
    //     let loot = this.getStringBetween(playersData, 'Loot:', 'Supplies:' ).trim()
    //     let supplies = this.getStringBetween(playersData, 'Supplies:', 'Balance:').trim()
    //     let balance = this.getStringBetween(playersData, 'Balance:', 'Damage:' ).trim()
    //     let damage = this.getStringBetween(playersData, 'Damage:', 'Healing:' ).trim()
    //     let healing = this.getStringBetween(playersData, 'Healing:', ' ' ).trim()
    //     this.huntData.playersdata.push({
    //       name,
    //       loot,
    //       supplies,
    //       balance,
    //       damage,
    //       healing
    //     })
    //   }

    //   return(this.huntData)
    // }

    extractFirstPlayerName(){
      let analyserData = this.removeFirstSection()
      let end = analyserData.indexOf('Loot:')
      let fistPlayer = analyserData.substr(0, end).replace(',', '').replace(/[0-9]/g, '').trim()
      return fistPlayer      
    }

    extractPlayersName(){
      let players = []

      
      var  huntdata = this.removeFirstSection()

      for( let i = 1; i <= this.extractNumberOfPlayers(); i ++){

        let end = huntdata.indexOf('Loot:')
        let name = huntdata.substr(0, end).replace(',', '').replace(/[0-9]/g, '').trim()
        
        players.push(name)

        huntdata = huntdata.substr(huntdata.indexOf('Healing:') + 8, huntdata.length)

        //console.log(huntdata.indexOf('Healing:'))
        //console.log(huntdata)
      }

      console.log(players)
      
    }

    removeFirstSection(){
      let start = this.analyserData.indexOf('Balance:') + 8
      let analyserData = this.analyserData.substr(start, this.analyserData.length) 
      return analyserData
    }

     getStringBetween(string, start, end){

      let initial = string.indexOf(start)
      if(initial < 0 ) return ''
      let final = string.indexOf(end)
      let len = Math.abs(initial - final) - start.length                                

      return string.substr( initial + start.length , len).trim()

    }
}

export default extractData