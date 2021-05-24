import React from 'react'

class Temp extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                currentTemp:60
            
        
    }
}

setTemperature = (e) => {
    this.setstate({
        currentTemp: e.target.value

    })
}
render(){

    var stateOfMatter;

    if(this.state.currentTemp <= 32){
        stateOfMatter="solid" 
    }
    else if(this.state.currentTemp >=212){
        stateOfMatter="gas"
    }
    else {
        stateOfMatter= "liquid"
    }
    
    return(
    <div>
      <input onChange={this.setTemperature} type="text" value={this.state.currentTemp}/>
      <p>At {this.state.currentTemp}<sup>0</sup>F, water is considered to be a "{stateOfMatter}" state of matter </p>
    </div>
    )
    
}
}

export default Temp;