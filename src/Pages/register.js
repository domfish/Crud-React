import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


function Register() {
    let navigate = useNavigate();

    const [data, setData] = useState({
        id:uuidv4(),
        nom: '',
        prenom: '',
        adressEmail: '',
        password: '',
    });
    const [hasError, setHasError] = useState(false)
    // Multiple Inputs with a Single onChange Handler in React
    // link : https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const validate = () => {
        if (data.nom === "" || data.prenom === "" || data.adressEmail === "" || data.password === "") {
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
            users.push(data)
            localStorage.setItem('users', JSON.stringify(users));
            navigate("/login");
        }
    }

    return (
        <div className="row">
            {
                hasError && !data.nom && !data.prenom && !data.adressEmail && !data.password ? <div class="alert alert-danger text-center" role="alert" >
                    Noooooooo!
                </div> : null
            }
            <h1 className="text-center text-primary">Join Us</h1>
            <form className="offset-md-3 col-md-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={data.nom} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" value={data.prenom} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse mail</label>
                    <input type="email" className="form-control" id="email" name="adressEmail" value={data.adressEmail} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={data.password} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPaswword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPaswword" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register