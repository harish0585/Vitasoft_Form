import { Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { clearErrors, register } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';



const initData = {
    name: "",
    email: "",
    password: "",
}

function Register() {
   
    const [data, setData] = useState(initData);
    const [regis, setRegis] = useState(false);

    const {name, email, password} = data;

    const dispatch = useDispatch();

      const { isAuthenticated, error, loading, user } = useSelector(
        (state) => state.auth
      );
      console.log(user, "user123")
   
      useEffect(() => {
        // if (isAuthenticated) {
        //  <Navigate to="/"/>
        // }

        // if (error) {
        //   alert(error);
        //   dispatch(clearErrors());
        // }
      }, [dispatch, alert, isAuthenticated, error, Navigate, regis]);

      


    const handleChange = (e) => {
      const {name, value} = e.target;
      setData({...data, [name] : value})
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(data, "data");
      setRegis(!regis);
      dispatch(register(data)); 
    }

    // const registerData = () => {
    //     try {
    //        const res =  axios.post("http://localhost:4000/api/v1/register", data);
    //        console.log(res,"res")
    //     } catch (error) {
            
    //     }
    // }


  return (
    <div style={{marginTop:"50px"}}>
      <form onSubmit={handleSubmit}>
      <TextField name="name" value={name} id="outlined-basic" label="Name" variant="outlined" required onChange={handleChange} />
      <br/>
        <TextField name="email" value={email} id="outlined-basic" label="email" variant="outlined" required onChange={handleChange} />
        <br/>
        <TextField name="password" value={password}  id="outlined-basic" label="password" variant="outlined" required onChange={handleChange}/>
        <br/>
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </div>
  )
}

export default Register
