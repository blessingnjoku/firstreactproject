import React from 'react'



class Listitems extends React.Component{
  state={
    onEdit:false,
    editValue:this.props.items
  }
   myRef = React.createRef();

  onRemove= () =>{
    this.myRef.current.className= "active";
    setTimeout(()=>{
      this.props.DeleteInfor();
    },200)
  }
handleEditValue=(e)=>{
const {name,value}=e.target;
this.setState({
  [name]:value
})
}

cancelInfo=()=>{
  const {editValue} = this.state;
  if(editValue ===''){
    this.setState({editValue: this.props.items});
  }
  this.setState({onEdit:false})

};
onEdit=()=>{
  this.setState({onEdit: true});
}

handleSave = () =>{
  const {editValue} = this.state;
  if(editValue === ''){
    this.setState({editValue: this.props.items});
  }
  else {
    this.props.handleEdit(editValue, this.props.id);

  }

  this.setState({onEdit: false});
}
  render(){
    const {items} = this.props;
    if(this.state.onEdit){
      return(
          <li className="todoli">
               <input type="text" className="secondinput"
               value={this.state.editValue}
               name="editValue" id="editValue"
               onChange={this.handleEditValue}
               />

             <div className="listRow">
                 <i className="fa fa-save edit"
                   title="Save"
                    onClick= {this.handleSave}
                 />
                 <i className="fa fa-times delete"
                   title="Cancel"
                   onClick={this.cancelInfo}
                 />

             </div>
          </li>

      );
    }else {
      return(
          <li ref={this.myRef} className="todoli">{items}
             <div className="listRow">
                 <i className="fa fa-pencil edit"
                   title="Edit"
                   onClick={this.onEdit}
                 />
                 <i className="fa fa-trash delete"
                   title="Delete"
                   onClick={this.onRemove}
                 />

             </div>
          </li>

      );
    }

  };
}

export default Listitems;
