import React from 'react'


class Form extends React.Component{
  render(){
    return(
      <form className="todoform">
      <input type="text" className="todoinput" required/>
      <button type="submit" className="todobutton">Create</button>
         </form>
    )
  }
}
export default Form;
