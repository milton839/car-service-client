import React from 'react';
import { FaEdit,FaTrashAlt } from 'react-icons/fa';

const ManageServiceDetail = ({service}) => {
    const {_id,title,description,image_url} =service;

    const handleDelete = (id)=>{
        console.log(id)
        fetch(`https://car-service-839.herokuapp.com/deleteService/${id}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert('Service deleted successfully');
        })
    }
    return (
        <tr>
            <td>{title}</td>
            <td>1200</td>
            <td><img style={{ height:'50px',width:'100px' }} src={image_url} alt=""/></td>
            <td className="d-flex justify-content-around">
                <div>
                    <FaEdit />
                </div>
                <div>
                    <button onClick={()=>handleDelete(_id)}><FaTrashAlt /></button>
                </div>
            </td>
        </tr>
    );
};

export default ManageServiceDetail;