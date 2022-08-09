import React, { useState } from 'react'


function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

const handleChange=(e)=>{
    setPassword(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
    return (
        <div className='row'>
            <h1 className='text-center text-primary'>Welcome</h1>
            <form className='offset-md-3 col-md-6'>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" value={email} onChange={handleEmail} />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" value={password} onChange={handleChange} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="remember" />
                    <label class="form-check-label" for="remember">Remembre Me</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login