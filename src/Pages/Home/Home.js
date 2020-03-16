import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import axios from 'axios'
import Table from '../Table/Table';

export default function Home() {
    const [data, setData] = useState({})

    const postData = async () => {
        try {
            const result = await axios.post('http://167.172.242.107:8282/ps/assesments', data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = ({ target }) => {
        const { name, value } = target
        const newData = Object.assign({}, data, { [name]: value });
        setData(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    }

    useEffect(() => {
    }, [])

    const myForm = useRef(null)

 const resetForm = () => {

   myForm.current.reset();

   }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12'>
                    <div className="col-12 d-md-none p-4">
                        <div className="row">
                            <div className="col-6">
                                <button className="navbar-toggler collapsed" type="button" data-toggle="modal" data-target="#mobile-navbar">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                            <div className="col-6">
                                <div className="nav-brand text-center">
                                    <img src="http://promptwebsolution.com/demo/iti-system/images/Canyon_Logo-revised2.png" alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <main className="display-block p-0">
                        <div className="d-none d-md-flex nav-top row p-4 pl-0 align-items-center">
                            <div className="col-8">
                                <h3>ASSIGNMENT SETUP</h3>
                            </div>
                            <div className="col-4">
                                <div className="row justify-content-end">
                                    <div className="col-8 input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"> <i className="fas fa-search"></i></div>
                                        </div>
                                        <input type="search" className="form-control"></input>
                                    </div>
                                    <div className="col-4 d-flex align-items-center profilename">
                                        <h5>Ravi</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header pb-10 pt-5 pt-md-8">
                            <div className="container-fluid">
                                <div className="header-body">
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid main-body px-sm-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card" id="assignmentsetupForm">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h2 className="title">Assignments Setup</h2>
                                                    <h6 className="sub-title">CHEK FOR ASSIGNMENT SETUP</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            {/* <form ref={myForm} onSubmit={() => { handleSubmit(); resetForm();}}> */}
                                            <form onSubmit ={handleSubmit} ref={myForm}>
                                                <div className="row">
                                                    <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="input-label">Select Programme</label>
                                                            <select onChange={handleChange} name="program" className="form-control custome-form-control ">
                                                                <option> Certificate Courses</option>
                                                                <option>CIB-Certificate in Business</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="input-label">Course List</label>
                                                            <select onChange={handleChange} name="course" className="form-control custome-form-control ">
                                                                <option>CHRM - Certificate in Human Resourse Management</option>
                                                                <option>CIA - Certificate in Accounting</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="input-label">Units List</label>
                                                            <select onChange={handleChange} name="units" className="form-control custome-form-control ">
                                                                <option >1003 - Certificate in Business</option>
                                                                <option>1002 - Business Communication</option>
                                                                <option>1012 - Business Accounting</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6 col-lg-4">
                                                        <div className="form-group">
                                                            <label className="input-label">Rego Period</label>
                                                            <select onChange={handleChange} name="semester" className="form-control custome-form-control ">
                                                                <option >Semester 1</option>
                                                                <option>Semester 2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-6">
                                                        <label className="input-label">Year</label>
                                                        <input type="text" name='name' value="2015" className="form-control custome-form-control" />
                                                    </div>
                                                    <div className="col-lg-2 col-md-6">
                                                        <label className="input-label">Course</label>
                                                        <div className="mt-2">CIB</div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-4">
                                                        <label className="input-label">Unit Code</label>
                                                        <div className="mt-2">1003 - Miscrosoft Office training</div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <label className="input-label">Exam Code</label>
                                                        <input onChange={handleChange} type="text" name="examcode" className="form-control custome-form-control" />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <label className="input-label">Weight</label>
                                                        <input onChange={handleChange} type="text" name="weight" className="form-control custome-form-control" />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <label className="input-label">Total Marks</label>
                                                        <input onChange={handleChange} type="text" name="totalmarks" className="form-control custome-form-control" />
                                                    </div>
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="form-group">
                                                            <label className="input-label">Due Date</label>
                                                            <input onChange={handleChange} type="date" className="form-control custome-form-control" name="dueDate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <label className="input-label">Description</label>
                                                            <textarea onChange={handleChange} type="text" name="note" className="form-control custome-form-control"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center  mt-3 mb-4">
                                                    <div className="col-12 text-center">
                                                        <button onClick={resetForm}  className="btn btn-primary add-new-btn" type="submit">Add New</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <Table></Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

