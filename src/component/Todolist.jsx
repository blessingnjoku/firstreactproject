import React from 'react'
import Listitems from './Listitems'



class Todolist extends React.Component{
  constructor(props){
    super(props)
    }
  render(){
  const {todolist, onDelete, onEdit, count}= this.props;
    return(
         <>
       <ul className="todoul">
         {
             todolist.map((items, index)=>{
               return <Listitems items={items.todolist}
               key={index}
                DeleteInfor={() =>{onDelete(index)}}
                handleEdit={onEdit}
                id={index}
               />

             })
         }
     </ul>
       <h2>You Added {count } Things To Do</h2>
       </>
   );
 };
}

export default Todolist;
