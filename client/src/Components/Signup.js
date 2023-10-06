import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Style.css'


function Signup() {
  const [name, setName] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3002/',{name,password})
    .then(response => {console.log(response.data)
      if(response.data === "no data"){
        alert("please enter data")
      }else{
        navigate('/home')
      }
      })
    .catch(err => console.log(err))
  }
  return (

    <div className='container'>
      <h1 className='loginH'>SignuP</h1>
      <form className="lsFORM" onSubmit={handleSubmit}> 
        <input className='lsINPUT' type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} /> <br />
        <input  className='lsINPUT' type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/> <br />
        <input type="submit" className="sub" />
        <h5>Already Have An Account?<Link to="/login">Login</Link></h5>
      
      </form>
    </div>
   
  )
}

export default Signup