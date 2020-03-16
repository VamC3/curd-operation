import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
function Navbar() {
    // const location = useLocation();
    // console.log(location)
    return (
        <div>
            <div>
                <nav className="d-none d-md-block p-0 side-nav">
                    <div className="d-block py-3 w-100">
                        <div className="nav-brand text-center">
                            <img src="http://promptwebsolution.com/demo/iti-system/images/Canyon_Logo-revised2.png" alt="logo" />
                        </div>
                        <ul className="navbar-nav mt-5">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#collapseHome">
                                    <i className="fas fa-home"></i> Home<i className="fas fa-caret-down"></i>
                                </a>
                                <div id="collapseHome" className="collapse">
                                    <ul className="list-unstyled pl-3">
                                        <li>
                                            <Link className='nav-link' to='/'>
                                                <i className="fas fa-home"></i> Home 1
                                                </Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link' to='/hometwo'>
                                                <i className="fas fa-home"></i> Home 2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link' to='/homethree'>
                                                <i className="fas fa-home"></i> Home 3
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="collapse" href="#registrationCollapse">
                                    <i className="fas fa-user"></i> Student Registration<i className="fas fa-caret-down"></i>
                                </a>
                                <div id="registrationCollapse" className="collapse">
                                    <ul className="list-unstyled pl-3">
                                        <li>
                                            <Link className='nav-link active' to='/registrationone'>
                                                <i className="fas fa-user"></i> Registration 1
                                                </Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link active' to='/registrationtwo'>
                                                <i className="fas fa-user"></i> Registration 2
                                                </Link>
                                        </li>
                                        <li>
                                            <Link className='nav-link active' to='/registrationthree'>
                                                <i className="fas fa-user"></i> Registration 3
                                                </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/courseapplications'>
                                    <i className="fas fa-mobile"></i> Course Applications
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/payment'>
                                    <i className="fas fa-money-check-alt"></i> Payment Batch
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/receipts'>
                                    <i className="fas fa-thumbs-up"></i> Receipts and Refunds
                               </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/studentaccounts'>
                                    <i className="fas fa-lock"></i> Student Accounts
                               </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/assignments'>
                                    <i className="fas fa-book"></i> Assignments Data Entry
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/course'>
                                    <i className="fas fa-percent"></i> Course Grades
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>

            </div>


            <div className="modal fade" id="mobile-navbar" data-backdrop="false" tabIndex="-1" role="dialog" aria-labelledby="Navbar"
                aria-hidden="true">
                <div className="modal-dialog" role="model">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ul className="navbar-nav mt-2">
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#mobileCollapseHome" aria-expanded="false">
                                        <i className="fas fa-home"></i> Home<i className="fas fa-caret-down float-right"></i>
                                    </a>
                                    <div id="mobileCollapseHome" className="collapse">
                                        <ul className="list-unstyled pl-3">
                                            <li>
                                                <Link className='nav-link' to='/'>
                                                    <i className="fas fa-home"></i> Home 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='nav-link' to='/hometwo'>
                                                    <i className="fas fa-home"></i> Home 2
                                            </Link>
                                            </li>
                                            <li>
                                                <Link className='nav-link' to='/homethree'>
                                                    <i className="fas fa-home"></i> Home 3
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " data-toggle="collapse" href="#mobileRegistrationCollapse">
                                        <i className="fas fa-user"></i> Student Registration<i className="fas fa-caret-down float-right"></i>
                                    </a>
                                    <div id="mobileRegistrationCollapse" className="collapse">
                                        <ul className="list-unstyled pl-3">
                                            <li>
                                                <Link className='nav-link active' to='/registrationone'>
                                                    <i className="fas fa-user"></i> Registration 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='nav-link active' to='/registrationtwo'>
                                                    <i className="fas fa-user"></i> Registration 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className='nav-link active' to='/registrationthree'>
                                                    <i className="fas fa-user"></i> Registration 3
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <Link className='nav-link' to='/courseapplications'>
                                        <i className="fas fa-mobile"></i> Course Applications
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/payment'>
                                        <i className="fas fa-money"></i> Payment Batch
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/receipts'>
                                        <i className="fas fa-thumbs-up"></i> Receipts and Refunds
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/studentaccounts'>
                                        <i className="fas fa-lock"></i> Student Accounts
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/assignments'>
                                        <i className="fas fa-book"></i> Assignments Data Entry
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to='/course'>
                                        <i className="fas fa-percent"></i> Course Grades
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar