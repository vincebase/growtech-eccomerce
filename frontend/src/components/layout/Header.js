import React, { Fragment, useState } from 'react'
import {Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { logout } from '../../actions/userActions'

import '../../App.css'


const Header = ( fixed ) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { user, loading } = useSelector(state => state.auth)
    const { cartItems } = useSelector(state => state.cart)

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out successfully.')
    }
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <Fragment>
             <nav className="relative flex flex-wrap items-center justify-between px-4	nav-bg text-gray-700">
        <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
          <div className="mt-1 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm hidden md:block font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
              href="#pablo"
            >
            <Link to="/">
                            <img src="/images/GrowTechFarms.svg" alt="logo" width="120"/>
                        </Link>
            </a>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase md:hidden"
              href="#pablo"
            >
                 <Link to="/">
                 <img src="/images/Growtech_logo_only.svg"
                    alt="logo-pic"
                    width="50"
                    height="50"
                    />
                     </Link>
            </a>


            <button
              className="login-button cursor-pointer text-xl leading-none px-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"

              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>

            </button>

          </div>
          <div
            className={
              "lg:flex flex-grow items-center px-5 mt-3" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center">

              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link to="/">
              <a className="ml-2">Our Products</a>
              </Link>
              </li>
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link to="/about_us">
                <a className="ml-2">About</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link to="/services">
                <a className="ml-2">Services</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link  to="/features">
                <a className="ml-2">Features</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link to="/contact">
                <a className="ml-2">Contact us</a>
              </Link>
              </li>  
              <li className="cursor-pointer nav-item px-3 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
              <Link to="/blogs">
                <a className="ml-2">Blogs</a>
              </Link>
              </li>  
            </ul>

          </div>
          <div className="md:col-3 mt-2 md:mt-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3 text-dark">Cart</span>
                        <span className="ml-1" id="cart_count">{cartItems.length}</span>
                    </Link>

                    {user ? (
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                        src={user.avatar && user.avatar.url}
                                        alt={user && user.name}
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span className="text-dark">{user && user.name}</span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                                {user && user.role === 'admin' && (
                                    <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                                )}
                                <Link className="dropdown-item" to="/orders/me">Orders</Link>
                                <Link className="dropdown-item" to="/me">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
                                    Logout
                                </Link>

                            </div>


                        </div>

                    ) : !loading && <Link to="/login" className="btn ml-4" id="login_btn">Login</Link>}

                </div>

                </div>
            </nav>
        </Fragment>
    )
}

export default Header
