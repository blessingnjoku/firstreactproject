import React from 'react'
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={(
      user: ''
    })

  }

  componentDidMount(){
    const user = localStorage.getItem('user')
    this.setSate({
      user:user
    })
  }

  render(
    const user = localStorage.getItem('user')
    if (!user){
      return<Redirect to="/login"/>
    }
    return(
    <div>
<h1>User Dashboard</h1>
<p><strong>Email:<strong> {this.state.user}</p>
    </div>
  )
}
export default Dashboard;
