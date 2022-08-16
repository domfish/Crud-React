import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productService from '../services/ProductService';

function Dashboard() {
    const [products, setProducts] = useState([])
    const getAllProducts = () => {
        productService.getAllProducts()
            .then(response => {
                // console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    const removeData = (id) => {
        productService.deleteProductById(id)
            .then(response => {
                // console.log(response);
                getAllProducts()
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='row'>
            <div className='offset-md-2 col-md-8'>

                <h1 className='text-center text-primary'>Here you found all the items </h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price </th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{p.id}</th>
                                    <td>{p.productName}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>
                                        <Link className='btn btn-success me-1' to={'/upDate/' + p.id}>Update</Link>
                                        <button className='btn btn-danger' onClick={(e) => removeData(p.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
export default Dashboard