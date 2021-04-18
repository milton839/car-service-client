import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import AdminHeader from '../../Admin/AdminHeader/AdminHeader';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const ServiceBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookService, setBookService] = useState([]);
    const [bookingData, setBookingData] = useState(null);
    const [status, setStatus] = useState('pending');
    const {bookId} = useParams();
    useEffect(() => {
        fetch('https://car-service-839.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setBookService(data))
    },[]);

    const selectService = bookService.find(service => service._id === bookId);
    console.log(bookService);
    console.log(selectService);





    
  const onSubmit = data => {
    setBookingData(data)

    };
    console.log(bookingData)

    const handlePaymentSuccess = paymentId =>{
      const orderDetails = {
        ...loggedInUser,
        status:status, 
        bookingData:bookingData,
        paymentId, 
        orderTime: new Date()
      };

      fetch('https://car-service-839.herokuapp.com/addOrder/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          alert('Your Order Successfully Done')
        }
      })
    }
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <DashboardSidebar></DashboardSidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <div style={{ display:bookingData ? 'none' : 'block' }}>
                         <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} className="form-control" />
                            <br></br>
                            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} className="form-control" />
                            <br></br>
                            <input defaultValue={selectService?.title} {...register("title", { required: true })} className="form-control" />
                            <br></br>
                            <input defaultValue={selectService?.price} {...register("price", { required: true })} className="form-control" />
                            <br></br>
                            
                            <input type="submit" value="Place Order" className="btn btn-primary" />
                            <br></br>
                        </form>
                        <br></br>
                    </div>
                    <div style={{ display:bookingData ? 'block' : 'none', margin:'0 auto' }}>
                            <ProcessPayment handlePayment = {handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBook;