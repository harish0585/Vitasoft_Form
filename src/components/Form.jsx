import React, { useEffect } from 'react'
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
    const [countries, setCountries] = React.useState([]);
    const [states, setStates] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = React.useState("IN");
    const {first_name, last_name, middle_name, address, country, state, email, phone_number, zipcode, height, weight} = data;
   
    

    // console.log(selectedCountry, "select")
    const handleChange = (event) => {
      const {name, value} = event.target;
        setData({...data, [name]: value})
    };

    useEffect(() => {
     getData()
    }, [country, selectedCountry])
    // console.log(countries, "Countries")
  // console.log(states, "States");
  // console.log(cities, "Cities");

    const getData = () => {
    var headers = new Headers();
headers.append("X-CSCAPI-KEY", 'U2JoY1BXVVpzdGxDQUNJT093WEVvcmxmMTRkYTM2eUdVYUFMU253MQ==');

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.text())
.then(result => setCountries(JSON.parse(result)))
.catch(error => console.log('error', error));
countries.filter(item => item.name == country ? setSelectedCountry(item.iso2) : null)

fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`, requestOptions)
.then(response => response.text())
.then(result => setStates(JSON.parse(result)))
.catch(error => console.log('error', error));

    }


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
        <TextField name="first_name" value={first_name} id="outlined-basic" label="First Name" variant="outlined" required onChange={handleChange} />
        <TextField name="last_name" value={last_name} id="outlined-basic" label="Last Name" variant="outlined" required onChange={handleChange} />
        <TextField name="middle_name" value={middle_name} id="outlined-basic" label="Middle Name" variant="outlined" required onChange={handleChange}/>
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
          required
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
          required
        >
          {countries.map(item => 
          <MenuItem value={item.name}>
            {item.name}
            </MenuItem>
          ) }
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
          required
        >
          {states.map(item =>
          <MenuItem value={item.name}>{item.name}</MenuItem>
          ) }
        </Select>
      </FormControl>
      </div>
      </div>
        <br />
        <br />
        <div className={styles.gaps}>
        <TextField name="email" value={email} type="email" id="outlined-basic" label="Email" variant="outlined" required onChange={handleChange}/>
        <TextField name="phone_number" value={phone_number} type="number" id="outlined-basic" label="Phone Number" required variant="outlined" onChange={handleChange}/>
        <TextField name="zipcode" value={zipcode} id="outlined-basic" label="Zipcode" variant="outlined" required onChange={handleChange}/>
        </div>
        <br />
        <br />
        <div className={styles.gaps}>
        <TextField name="height" value={height} id="outlined-basic" label="Height" variant="outlined" required onChange={handleChange}/>
        <TextField name="weight" value={weight} id="outlined-basic" label="Weight" variant="outlined" required onChange={handleChange}/>
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
    <div className={styles.display}>
    <div>FirstName:{data.first_name}</div>
    <div>LastName:{data.last_name}</div>
    <div>MiddleName:{data.middle_name}</div>
    <div>Address:{data.address}</div>
    <div>Country:{data.country}</div>
    <div>State:{data.state}</div>
    <div>Email:{data.email} Phone Number:{data.phone_number}</div>
    <div>Height:{data.height} weight:{data.weight}</div>
    </div>
}
    </>
  )
}

export default Form