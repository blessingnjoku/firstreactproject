import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Form from './component/Form'
import Todolist from './component/Todolist'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    data:[]
    }


  }

  forSubmit=(newvalue)=>{
   this.setState({data: [...this.state.data, newvalue]})
  }

RemoveInfor= index =>{
  const {data}= this.state;
  this.setState({
    data:data.filter((items, i)=>{
      return i !== index
    })
  })
}
forOnEdit=(editValue, index )=>{
  const {data}= this.state;
  data.forEach((items, i)=>{
    if(i === index){
      items.todolist = editValue;
    }
  });
  this.setState({data: data});
}
componentDidUpdate(){
  localStorage.setItem('dataStore', JSON.stringify(this.state.data));
}
componentDidMount(){
  const dataStore=JSON.parse(localStorage.getItem('dataStore'));
}

  render(){
    const {data} = this.state;
    return(
      <div className="divcontainer">
      <h1 className="todotext">To Do List</h1>
      <Form onSubmit={this.forSubmit}/>
      {data.length===0
        ?<h2>What Will You Be Doing Today!</h2>
        :<Todolist todolist={data}
         onDelete={this.RemoveInfor}
         onEdit={this.forOnEdit}
         count={data.length}
      />
      }
       </div>
    );
  };
}


export default App;
