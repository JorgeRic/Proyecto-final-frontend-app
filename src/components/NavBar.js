import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from './withAuth.js'

class Navbar extends Component {
  render() {  
    return (
      <div>
         <img className="logo" src="cityzennegro.jpg" logo="logo" />
         
        {this.props.isLoggedIn ? (
          <>

        <p>username: {this.props.user.username}</p>
        <p onClick={this.props.logout}>Logout</p>
        <NavLink to='/' activeClassName="">Home</NavLink>
        <NavLink to='/list' activeClassName="">Lista de viviendas</NavLink>
        <NavLink to='/private' activeClassName="">Private page</NavLink>
        </>

        ): (
        <>
        {/* <img className="logo" src ="https://attachment.outlook.live.net/owa/jorrillop%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATY0MDABLTkyMDctZDBjMS0wMAItMDAKAEYAAAMXzxHVXGd0RaOmnjdHr7A5BwCX2egqS0RXSq4saTuvhNeNAAACAQwAAACX2egqS0RXSq4saTuvhNeNAAOIJnyPAAAAARIAEAAZV5m00p81T7GmJxmjyi2u&thumbnailType=2&owa=outlook.live.com&scriptVer=2019080502.13&isc=1&X-OWA-CANARY=tk6QmXrSyUegGhCS5n3o3sCmxUHTINcYB8VaVzJ3rs8dAhgiT2TT2x8htC866xCc-lLw4RyMdFw.&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2MDBGOUY2NzQ2MjA3MzdFNzM0MDRFMjg3QzQ1QTgxOENCN0NFQjgiLCJ4NXQiOiJCZ0Q1OW5SaUJ6Zm5OQVRpaDhSYWdZeTN6cmciLCJ0eXAiOiJKV1QifQ.eyJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTI4MjctNDA5NjAwLTI0NDk5ODU3MjlcIixcInB1aWRcIjpcIjE3NTkyMjEwNTQ0MjczMjlcIixcIm9pZFwiOlwiMDAwNjQwMDAtOTIwNy1kMGMxLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIn0iLCJuYmYiOjE1NjU3OTk1MDEsImV4cCI6MTU2NTgwMDEwMSwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50Lm91dGxvb2subGl2ZS5uZXRAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIn0.auflZElxwJr3BQM9upob0acw3BPPwmzIKGvm0FhmNF2Z2iFPIVLzaSnwY_PyC0ddJqJFJJNv3M1pD5R3_Q-s_siumVE2-32XiRkLU66x2ro-HEJoCiSYO4bh0nv93Xn_2nkxCPCZBM8QHYigqa8mKh9t_TKRxpy4J0QOMdbz7483RR5GURFyPZcN1RGczNCnpFoh_yEWqFAUzStsU4TFzsjcMMOsET5ukYhaFxNafkcJHhN5NvY0zwE_6mBPVvF9Vmwc0g7F34INskw-vLjF4Wl8-8oAxxSekLaeNa9bjSpuZNDBBahwQQRGtTnjSSwx_l6Ouuz34mjud2TNPu8fiQ&animation=true" logo="logo" /> */}
        <NavLink to='/' activeClassName="">Home</NavLink>
        <NavLink to='/login' activeClassName="">Private</NavLink>
        
   
      </>
        )}
      </div>
    )
  }
}

export default withAuth(Navbar);