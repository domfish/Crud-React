// product name 
// product description : text area 
// price 
// quantity 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function CreateProduct() {
    const Submit=() =>{
             
    }

    return (
        <div className='row'>
            <form className='offset-md-3 col-md-6'>
            <h1 className='text-center text-primary my-5'>Add New Prodcut</h1>
            <div className='input-group mb-3'>
                <label className="input-group-text " id="basic-addon1">Product Name</label>
                <input type="text" className="form-control " id='Name'  aria-describedby="basic-addon1" />
            </div>
            
            <div className="input-group mb-3 mt-2 col-4">
                <span className="input-group-text ">Price</span>
                <input type="number" className="form-control" id='price' aria-label="Amount (to the nearest dollar)" />
                <span className="input-group-text">.00</span>
            </div>
            <div className="input-group mb-3 mt-2 col-4">
                <span className="input-group-text ">Quantity</span>
                <input type="Number" className="form-control" id='quantity' aria-label="Amount (to the nearest dollar)" />
            </div>

            <div className="input-group">
                <span className="input-group-text">description</span>
                <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>
            <div className='d-grid gap-2'>
            <button onClick={Submit} className='btn btn-success mt-5 '>Add New Product</button>
            <Link className="btn btn-secondary" to="/">Search</Link>
            </div>
            </form>
        </div>
    )
}

export default CreateProduct