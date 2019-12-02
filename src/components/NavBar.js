import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from './withAuth.js'

class Navbar extends Component {
  render() {  
    return (
      <div className="color list-navbar">
         
        {this.props.isLoggedIn ? (
          <div className="container-fluid list-navbar">
            <div className="row">
       
            <NavLink to='/' activeClassName="logo"><img className="img-fluid float-left w-20" src="cityzennegro.jpg" logo="logo" /></NavLink>
          
            <div className="navbar-private">
              <NavLink to='/private' activeClassName="">
                <button class=".items-navbar-private btn btn-outline-dark btn-small mt-1 mb-1 text-center  font-weight-bold ml-5 mr-5"><p>Private Page</p></button>
              </NavLink>
              <p className="" onClick={this.props.logout}>
                <button class=".items-navbar-private btn btn-outline-danger btn-small mt-1 mb-1 text-center  font-weight-bold ml-5"><p>Logout</p></button>
              </p>
            </div>
          </div>
        </div>
        ): (
        <>
       
        <ul className="list-navbar">
          <li className="list-logo">
           <NavLink to='/' activeClassName="logo"><img className="logo" src="cityzennegro.jpg" logo="logo" /></NavLink>
          </li>
          {/* <li className="list-logo">
            <NavLink to='/login'><img className="prohibido" src="https://cdn.pixabay.com/photo/2012/04/18/21/42/no-entry-37967_960_720.png" width="40px" height="40px" border-radius="20px"/></NavLink>
          </li> */}
          <li className="align-items-center">
          <NavLink to='/login'><button class="btn btn-outline-danger btn-small mt-1 mb-1 text-center float-rigth "><p>Administrador</p></button></NavLink>
          </li>
        </ul>
       
   
      </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);