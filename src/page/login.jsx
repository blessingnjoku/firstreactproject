import React from 'react'
import {Redirect} from 'react-router-dom'

class Login extends React.component{
  constructor(){
    super(props)
    this.sate={
      email:'',
      password: '',
      emailErr:'',
      pwdErr:'',
      authErr:'',
      success:false
    }
  }

  formHandler=(e) =>{
    let nam = e.target.name
    let val = e.target.value
    this.setstate({
      [nam]:val
    })
  }

  submitHandler=(e)=>{
    e.preventDefault()
    const {email, password} = this.state
   // this is Es6 way of writing if else statement//
   email===""? this.setstate({emailErr: 'email is required'}): this.setSate({email})
   password===''? this.setSate({pwdErr: 'password is required'}): this.setState({passowrd})

   if(email !=="" && password!==""){
     if(email=== "blessingnjoku505@gmail.com" && passowrd==='123456'){
     localStorage.setItem('user',email)
     this.setState({success:true})
   }else{
     this.setState({authErr:'incorrect email address or passsword'})
   }
  }


  render(){
    let errorStyle={
  color:'red'
}
const user = localStorage.getItem('user')
if (user){
  return
}

    return(
      <div>
      <h1>Login</h1>
      <form action="" onSubmit={this.submitHandler}>
      <p>Email</p>
      <input type="email" name="email" id="" value={this.state.email} onChamge={this.formHandler}/>
      <p style={errorstyle}>{this.state.emailErr}</p>
       <p>password</p>
       <input type="password" name="password" id=""value={this.state.password} onChange={this.formHandler}/>
       <p style={errorStyle}>{this.state.authErr}</p>
       <input type="submit" value="login"/>
      </form>

      </div>
    )
  }
}

export default Login;
