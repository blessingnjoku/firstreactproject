import React from 'react'
import Navbar from '../component/navbar'
import Footer from '../component/footer'


class Mainlayout extends React.component{
  render(){
    return(
      <div>
      <Navbar/>
      {this.props.children}
      <Footer/>
      </div>

    )
  }
}

export default Mainlayout;
