import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AdminHeader from '../AdminHeader/AdminHeader';
import axios from 'axios';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [imageUrl, setImageUrl] = useState(null);
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'cb0aabf5a2bd15ad9c2afc66db955837');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleSubmit = (e) => {
        const eventData ={
            title: info.title,
            price: info.price,
            description:info.description,
            image_url: imageUrl
        }

        const url = `https://car-service-839.herokuapp.com/addService`;
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
                <div className="col-md-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-7 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add a Service</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Service Title</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Service Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Service Price</label>
                            <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Service Price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Service Description</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;