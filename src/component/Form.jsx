import React from 'react'


class Form extends React.Component{
  inputInfo={
    todolist:""
  }
state = this.inputInfo;

forInputEvent=(e)=>{
  const{name,value}= e.target
  this.setState({
    [name]:value
  })
}


forOnSubmitEvent=(e)=>{
  e.preventDefault();
   this.props.onSubmit(this.state);
   this.setState(this.inputInfo);
}
  render(){
    const {todolist}=this.state;
    return(
      <form className="todoform" onSubmit={this.forOnSubmitEvent}>
      <input type="text"
      name="todolist"
      id="todolist"
      value={todolist}
      onChange={this.forInputEvent}
      className="todoinput" required/>
      <button type="submit" className="todobutton">Create</button>
         </form>
    )
  }
}
export default Form;
