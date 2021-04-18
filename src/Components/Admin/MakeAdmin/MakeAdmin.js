import React from 'react';
import { useState } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const [info, setInfo] = useState([]);
    const handleBlur = (event) =>{
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    console.log(info);
    const handleSubmit = (e) => {
        const eventData ={
            name: info.name,
            email: info.email,
        }

        const url = `https://car-service-839.herokuapp.com/addAdmin`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res => {
            if(res){
                alert('Your Service added successfully');
            }
        });
        e.preventDefault();
    }
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Make Admin</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name" required/>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;