import { Button } from '@mui/material';
import React from 'react'
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
        <Link style={{textDecoration: "none"}} to="/"><Button variant="contained" color="primary">Home</Button></Link>
        <Link style={{textDecoration: "none"}} to="/login"><Button variant="contained">Login</Button></Link>
        <Link style={{textDecoration: "none"}} to="/register"><Button variant="contained">Register</Button></Link>
    </div>
  )
}

export default Header