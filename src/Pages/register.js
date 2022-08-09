import React, { useState } from "react";

function Register() {

    const [data, setData] = useState({
            nom: '',
            prenom: '',
            adressEmail: '',
            password: '',
        });
        // Multiple Inputs with a Single onChange Handler in React
        // link : https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
        const handleChange =(e)=>{
            setData({
                ...data,
                [e.target.name] : e.target.value
            }) 
        }
    return (
        <div className="row">
            <h1 className="text-center text-primary">Join Us</h1>
            <form className="offset-md-3 col-md-6">
                <div className="mb-3">
                    <label htmlFor="nom" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={data.nom} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="prenom" className="form-label">Prenom</label>
                    <input type="text" className="form-control" id="prenom" name="prenom" value={data.prenom} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse mail</label>
                    <input type="email" className="form-control" id="email" name="adressEmail" value={data.adressEmail} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={data.password} onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPaswword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPaswword" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register