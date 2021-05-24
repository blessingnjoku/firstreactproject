import React from 'react'
import {link}from 'react-router-dom'



function Navbar(){
  const user = localStorage.getItem('user')
  return(
    <div>
                 <nav className="tex-center">
                  <span className"px-5"><link to="/home"> Home</link></span>
                  <span className"px-5"><link to="/dashboard">Dashboard</link></span>
                 <span className"px-5"><link to="/about">About</link></span>
                  {user? <span className"px-5"><link to="/logout">Logout</link></span>
                    <span className"px-5"><link to="/login">login</link></span>
               }
             </nav>
       </div>

  )
}




// class Menuitems extends React.Component{
//     render(){
//         let textstyle={
//             color:"#fff",
//             paddingRight:'3px'
//         }
//         return(
//             <span style= {textStyle} >Hello {this.props.item}</span>
//         )
//     }
//
// }
//
// let Navbar = () => {
//     return(
//         <div>
//             <nav className="tex-center">
//               <span className"px-5"><link to="/home"> Home</link></span>
//               <span className"px-5"><link to="/dashboard">Dashboard</link></span>
//               <span className"px-5"><link to="/about">About</link></span>
//                 {<span className"px-5"><link to="/logout">Logout</link></span>
//                   <span className"px-5"><link to="/login">login</link></span>
//                 }
//             </nav>
//         </div>
//     )
// }

export default Navbar;
