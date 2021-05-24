import React from 'react'

class Example extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'blessing',
            count:1
        }
    }
    changeName = () =>{
        this.setstate({
            name: 'njoku'
        })
    }

addCount = () =>{
    this.setstate({
        count: this.state.count +1
    })
}

render() {
    return(
        <div>
            <h1>{this.state.name}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={this.addCount}>+</button>
            <button onClick={this.chanegName}>changename</button>
        </div>
    )
}
}
export default Example;