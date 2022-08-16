import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    let navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false)
    // const [hasError, setHasError] = useState(false)
    // Multiple Inputs with Multiple onChange Handler in React
    const handleChange = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const validate = () => {
        if (password === "" || email === "") {
            setHasError(true);
        } else {
            setHasError(false);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        if (!hasError) {
            //  localStorage 
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let userFound = users.find(user=> {
                return user.adressEmail === email && user.password === password
            });
            if(userFound !== undefined){
                navigate("/");
            }else(alert('Verifier vos infos!!'))
        }
    }
    return (
        <div className='row'>
            
            <h1 className='text-center text-primary'>Welcome</h1>
            <form className='offset-md-3 col-md-6' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={email}   onChange={handleEmail}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={password}  onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remembre Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login

