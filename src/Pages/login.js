import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
    let navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false)
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
                navigate("/Dash");


            }else(alert('Verifier vos infos!!'))

        }
    }
    return (
        <div className='row'>
            {
                hasError && !email && !password ? <div class="alert alert-danger text-center" role="alert" >
                    Noooooooo!
                </div> : null
            }
            <h1 className='text-center text-primary'>Welcome</h1>
            <form className='offset-md-3 col-md-6' onSubmit={handleSubmit} >
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