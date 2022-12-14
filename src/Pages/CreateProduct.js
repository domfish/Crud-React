import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import productService from '../services/ProductService';
import { useForm } from "react-hook-form";
import { useState } from 'react';


function CreateProduct() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate();
    // const [data, setData] = useState({
    //     productName: "",
    //     price: '',
    //     quantity: '',
    //     description: '',
    // })
    // const handleChange = (e) => {
    //     setData({
    //         ...data,
    //         [e.target.name]: e.target.value
    //     })
    // }
    const onSubmit = (data) => {
        productService.addProduct(data)
            .then(res => {
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })

    }
    // const submit=(e) =>{
    //     e.preventDefault();
    //     productService.addProduct(data)
    //     .then(response=>{
    //         navigate('/')
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })    
    // }
    return (
        <div className='row'>
            <form className='offset-md-3 col-md-6' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center text-primary my-5'>Add New Prodcut</h1>
                <div className='input-group mb-3'>
                    <label className="input-group-text " id="basic-addon1">Product Name</label>
                    <input type="text" className="form-control" {...register('productName', { required: 'the filed is required' })} />
                    {errors.productName && <p className='d-block invalid-feedback'>{errors.productName.message}</p>}
                </div>

                <div className="input-group mb-3 mt-2 col-4">
                    <span className="input-group-text ">Price</span>
                    <input type="number" className="form-control" {...register('price', { required: 'the filed is required' })} />
                    <span className="input-group-text">.00</span>
                    {errors.price && <p className='d-block invalid-feedback'>{errors.price.message}</p>}
                </div>
                <div className="input-group mb-3 mt-2 col-4">
                    <span className="input-group-text ">Quantity</span>
                    <input type="Number" className="form-control" {...register('quantity', { required: 'the filed is required' })} />
                    {errors.quantity && <p className='d-block invalid-feedback'>{errors.quantity.message}</p>}
                </div>

                <div className="input-group">
                    <span className="input-group-text">description</span>
                    <textarea className="form-control" {...register('description', { required: 'this field is required' })}></textarea>
                    {errors.description && <p className='d-block invalid-feedback'>{errors.description.message}</p>}
                </div>
                <div className='d-grid gap-2'>
                    <button type='submit' className='btn btn-success mt-5'>Add New Product</button>
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct