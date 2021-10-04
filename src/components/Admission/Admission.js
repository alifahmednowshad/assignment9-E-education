import React from 'react';
import { useHistory } from 'react-router';
import './Admission.css'

const Admission = () => {

    const history = useHistory([]);
    const handleAdmissinBtn = () =>{
        history.push('./admission')
    }

    return (
        <div className='container'>
            <div className='course-area text-center py-5 bg-info my-5 border'>
                <h1>Admission Here!!!</h1>
            </div>
            <form className="row g-3 rounded-3 p-4 my-5 bg-light">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Course Name</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label for="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">State</label>
                    <input type="text" className="form-control" id="inputState"/>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button onClick={handleAdmissinBtn}  className="w-25 p-2 btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Admission;