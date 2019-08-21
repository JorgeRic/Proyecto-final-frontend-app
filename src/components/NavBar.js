import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from './withAuth.js'

class Navbar extends Component {
  render() {  
    return (
      <div className="nav-bar">
         {/* <img className="logo" src="cityzennegro.jpg" logo="logo" /> */}
         
        {this.props.isLoggedIn ? (
          <div className="navbar-private">
         <NavLink to='/' activeClassName="logo"><img className="logo" src="cityzennegro.jpg" logo="logo" /></NavLink>
        {/* <NavLink to='/' activeClassName="">Home</NavLink> */}
       <div className="items-navbar-private">
        <ul>
          <li>
          <h3>Bienvenido {this.props.user.username}</h3>
          </li>
          <li>
            <p className="narbar-private" onClick={this.props.logout}><img className="logo-logout" src="data:image/png;base64,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"/></p>
          </li>
          <li>
            <NavLink to='/private' activeClassName="narbar-private"><img className="logo-staff" src="https://previews.123rf.com/images/valentint/valentint1705/valentint170500852/78310416-icono-de-la-formaci%C3%B3n-del-personal-bot%C3%B3n-de-p%C3%A1gina-web-de-personal-de-personal-sobre-fondo-blanco-.jpg"></img></NavLink>
          </li>
        </ul>
        </div>
        </div>
        ): (
        <>
        
        {/* <img className="logo" src ="https://attachment.outlook.live.net/owa/jorrillop%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATY0MDABLTkyMDctZDBjMS0wMAItMDAKAEYAAAMXzxHVXGd0RaOmnjdHr7A5BwCX2egqS0RXSq4saTuvhNeNAAACAQwAAACX2egqS0RXSq4saTuvhNeNAAOIJnyPAAAAARIAEAAZV5m00p81T7GmJxmjyi2u&thumbnailType=2&owa=outlook.live.com&scriptVer=2019080502.13&isc=1&X-OWA-CANARY=tk6QmXrSyUegGhCS5n3o3sCmxUHTINcYB8VaVzJ3rs8dAhgiT2TT2x8htC866xCc-lLw4RyMdFw.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDA5NjAwLTI0NDk5ODU3MjlcIixcInB1aWRcIjpcIjE3NTkyMjEwNTQ0MjczMjlcIixcIm9pZFwiOlwiMDAwNjQwMDAtOTIwNy1kMGMxLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NjU3OTk1MDEsImV4cCI6MTU2NTgwMDEwMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.auflZElxwJr3BQM9upob0acw3BPPwmzIKGvm0FhmNF2Z2iFPIVLzaSnwY_PyC0ddJqJFJJNv3M1pD5R3_Q-s_siumVE2-32XiRkLU66x2ro-HEJoCiSYO4bh0nv93Xn_2nkxCPCZBM8QHYigqa8mKh9t_TKRxpy4J0QOMdbz7483RR5GURFyPZcN1RGczNCnpFoh_yEWqFAUzStsU4TFzsjcMMOsET5ukYhaFxNafkcJHhN5NvY0zwE_6mBPVvF9Vmwc0g7F34INskw-vLjF4Wl8-8oAxxSekLaeNa9bjSpuZNDBBahwQQRGtTnjSSwx_l6Ouuz34mjud2TNPu8fiQ&animation=true" logo="logo" /> */}
       
        <ul className="list-navbar">
          <li className="list-logo">
           <NavLink to='/' activeClassName="logo"><img className="logo" src="cityzennegro.jpg" logo="logo" /></NavLink>
          </li>
          <li className="list-logo">
            <NavLink to='/login'><img id="prohibido" src="https://cdn.pixabay.com/photo/2012/04/18/21/42/no-entry-37967_960_720.png" width="40px" height="40px" border-radius="20px"/></NavLink>
          </li>
        </ul>
       
   
      </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);