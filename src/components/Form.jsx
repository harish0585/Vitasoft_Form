import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./Form.module.css";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const initState ={
    first_name: "",
    last_name: "",
    middle_name: "",
    address: "",
    country: "",
    state: "",
    email:"",
    phone_number:"",
    zipcode: "",
    height: "",
    weight: ""
}

function Form() {

    const [data, setData] = React.useState(initState);
    const [showData, setShowData] = React.useState(false);
    const {first_name, last_name, middle_name, address, country, state, email, phone_number, zipcode, height, weight} = data;

    const handleChange = (event) => {
      const {name, value} = event.target;
      setData({...data, [name]: value})
    };


    const handleSubmit = (e) => {
       e.preventDefault();
       setShowData(true);
       console.log(data, "form");
    }

  return (
    <>
    <Box className={styles.box}>
      <Card variant="outlined">
        <CardContent>
            <form onSubmit={handleSubmit}>
        <div className={styles.gaps}>
        <TextField name="first_name" value={first_name} id="outlined-basic" label="First Name" variant="outlined" onChange={handleChange} />
        <TextField name="last_name" value={last_name} id="outlined-basic" label="Last Name" variant="outlined" onChange={handleChange} />
        <TextField name="middle_name" value={middle_name} id="outlined-basic" label="Middle Name" variant="outlined" onChange={handleChange}/>
        </div>
        <br />
        <br />
        <div className={styles.gaps}>
        <TextField
          name="address"
          value={address}
          id="outlined-multiline-static"
          label="Address"
          multiline
          rows={4}
          sx = {{width: "450px"}}
          onChange={handleChange}
        />
        <div className={styles.countryState}>
        <FormControl sx={{width: "200px"}} >
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          name="country"
          value={country}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="UK">UK</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{width: "200px"}} >
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select 
         name="state"
         value={state}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="State"
          onChange={handleChange}
        >
          <MenuItem value="AP">AP</MenuItem>
          <MenuItem value="Telangana">Telangana</MenuItem>
        </Select>
      </FormControl>
      </div>
      </div>
        <br />
        <br />
        <div className={styles.gaps}>
        <TextField name="email" value={email} type="email" id="outlined-basic" label="Email" variant="outlined" onChange={handleChange}/>
        <TextField name="phone_number" value={phone_number} type="number" id="outlined-basic" label="Phone Number" variant="outlined" onChange={handleChange}/>
        <TextField name="zipcode" value={zipcode} id="outlined-basic" label="Zipcode" variant="outlined" onChange={handleChange}/>
        </div>
        <br />
        <br />
        <div className={styles.gaps}>
        <TextField name="height" value={height} id="outlined-basic" label="Height" variant="outlined" onChange={handleChange}/>
        <TextField name="weight" value={weight} id="outlined-basic" label="Weight" variant="outlined" onChange={handleChange}/>
        </div>
        <br />
        <br />
        <Button type="submit" variant="contained">Submit</Button>
        </form>
        </CardContent>
      </Card>
    </Box>
    <hr/>
    {showData &&
    <>
    <div>FirstName:{data.first_name}</div>
    <div>LastName:{data.last_name}</div>
    <div>MiddleName:{data.middle_name}</div>
    <div>Address:{data.address}</div>
    <div>Country:{data.country}</div>
    <div>State:{data.state}</div>
    <div>Email:{data.email} Phone Number:{data.phone_number}</div>
    <div>Height:{data.height} weight:{data.weight}</div>
    </>
}
    </>
  )
}

export default Form