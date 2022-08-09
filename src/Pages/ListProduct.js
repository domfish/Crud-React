import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Dashboard() {
    const [ID, setID] = useState({
        id:uuidv4()
    });
    return (
        <div>
            <h1 className='text-center text-primary'>Here you found all the items </h1>
            <table className="table">
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
                    <tr>
                        <th scope="row">{ID.id}</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button className='btn btn-success '>Update</button> <button className='btn btn-danger'>Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
export default Dashboard