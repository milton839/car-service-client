import axios from 'axios';
import React, { useState } from 'react';
import AdminHeader from '../../Admin/AdminHeader/AdminHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const Review = () => {
    const [info, setInfo] = useState({});
    const [imageUrl, setImageUrl] = useState(null);
    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
console.log("title",info.name);
console.log("description",info.company);
console.log("description",info.description);
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
            name: info.name,
            company: info.company,
            description:info.description,
            image_url: imageUrl
        }

        const url = `https://car-service-839.herokuapp.com/addReview`;
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
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand pb-3">Add a Review</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company Name" required />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Description" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;