import React, { useState } from "react";

function Register() {

    const [data, setData] = useState({
            nom: '',
            prenom: '',
            adressEmail: '',
            password: '',
        });

        const handleChangeName =(e)=>{
            setData({
                ...data,
                nom : e.target.value
            }) 
        }
        const handleChangePreNom =(e)=>{
            setData({
                ...data,
                prenom : e.target.value
            }) 
        }
        const handleChangeEmail =(e)=>{
            setData({
                ...data,
                adressEmail : e.target.value
            }) 
        }
        const handleChangePassword =(e)=>{
            setData({
                ...data,
                password : e.target.value
            }) 
        }
    return (
        <div className="row">
            <h1 className="text-center text-primary">Join Us</h1>
            <form className="offset-md-3 col-md-6">
                <div class="mb-3">
                    <label for="nom" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="nom" value={data.nom} onChange={handleChangeName}/>
                </div>
                <div class="mb-3">
                    <label for="prenom" class="form-label">Prenom</label>
                    <input type="text" class="form-control" id="prenom" value={data.prenom} onChange={handleChangePreNom}/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Adresse mail</label>
                    <input type="email" class="form-control" id="email" value={data.adressEmail} onChange={handleChangeEmail}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" value={data.password} onChange={handleChangePassword}/>
                </div>
                <div class="mb-3">
                    <label for="confirmPaswword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPaswword" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}
export default Register