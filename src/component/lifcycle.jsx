import React from 'react'


class Trial extends React.Component{
    constructor(props){
        super(props)
        this.state={
            strikes:0,
            show:true
        }
    }

    timerTick =()=>{
    this.setState({
    strikes: this.state.strikes +1
})
    }

    del = () =>{
        this.setState({show:false})
    }

    ComponentDidMount(){
        setInterval(this.timerTrick, 1000)
    }
  componentDidupdate(){
    console.log("i would always")
   }

   shouldComponentUpdate(){
       if(this.state.strikes < 10){
           return true;
       }
       else{
           return false;
       }
   }

   ComponentWillUnmount(){
       alert('so you want to delete me')
   }



    render(){
        if(this.state.show){

        
        return(
        <div>
            <h1 className="m-5 p-5 bg-danger text-center text-light">{this.state.strikes}</h1>
            <button onClick={this.del}>Delete</button>
        </div>
        )
        }
    }
}

export default Trial;