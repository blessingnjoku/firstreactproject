import React from 'react'



class Todolist extends React.Component{
  render(){
    return(
      <div>
      <div className="divcontainer">
      <h1 className="todotext">To Do List</h1>
      <form className="todoform">
      <input type="text" className="todoinput" required/>
      <button type="submit" className="todobutton">Create</button>
         </form>

        <ul className="todul">
        <li className="todoli">cooking</li>
        <li className="todoli">games</li>
        <li className="todoli">reading</li>
        <li className="todoli">dancing</li>
        <li className="todoli">sport</li>
        <li className="todoli">talking</li>
      </ul>
      </div>
      </div>

    )
  }
}

export default Todolist;
