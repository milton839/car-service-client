import React from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section className="">
            <AdminHeader></AdminHeader>
            <div className="row">
                <div className="col-md-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 me-5 p-5 mt-5" style={{ position: "absolute",right:'0', backgroundColor: "#F4FDFB" }}>
                    <h5 className="text-brand">Make Admin</h5>
                    <form >
                    {/* onSubmit={handleSubmit} */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;