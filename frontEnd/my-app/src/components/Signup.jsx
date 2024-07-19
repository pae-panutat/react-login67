import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


function Signup() {

    const [values, setValues] = useState({name: '', email: '', password: ''})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/signup', values)
        .then(res => {
            if (res.data) {
                 alert(res.data)
                 navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-50'>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="name"><strong>Email address</strong></label>
                <input type="text" className="form-control rounded-0" name="name" onChange={e => setValues({...values, name: e.target.value })} placeholder="Enter email" autoComplete='off' />
            </div>
            <div className="mb-3">
                <label htmlFor="email"><strong>Email address</strong></label>
                <input type="email" className="form-control rounded-0" name="email" onChange={e => setValues({...values, email: e.target.value })} placeholder="Enter email" autoComplete='off' />
            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" className="form-control rounded-0" name="password" onChange={e => setValues({...values, password: e.target.value })} placeholder="Password" />
            </div>
            
                <button type="submit" className="btn btn-primary w-100 rounded-0">Create Account</button>
                {/* <p>You are agree to terms and policies</p> */} <br /><br />
                <Link to='/login' type="submit" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Log in</Link>
        </form>
    </div>
</div>
  )
}

export default Signup