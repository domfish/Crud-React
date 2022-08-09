import React from "react";

function Register() {
    return (
        <div className="row">
            
            <form className="offset-md-3 col-md-6">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nom</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Prenom</label>
                    <input type="text" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Adresse mail</label>
                    <input type="email" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>


        </div>
    )
}
export default Register