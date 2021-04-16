import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Add a Service</h5>
                    <form >
                    {/* onSubmit={handleSubmit} */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Upload a image</label>
                            <input type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default OrderList;