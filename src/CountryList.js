import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom'
import './CountryList.css'
import Edit from './Edit';

function CountryList() {

    const [data, setData] = useState([])
    const url = `http://localhost:3003/countries/`
    const [values, setValues] = useState({
        name: "",
        language: "",
        area: ""
    })
    // const [name, setName ] = useState("")
    // const [lang, setLang ] = useState("")
    // const [area, setArea ] = useState("")
    

    useEffect(() => {
        getAllData()
    })

    const getAllData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    }

    const addCountry = (e) => {
        // e.preventDefault();
        
        fetch(url, {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: values.name,
                language: values.language,
                area: values.area
            })
        })
        .then(() => {
            setValues({name: "", language: "", area: ""})
        })
        

    }

    const handleKeyPress = (e) => {
        
        if(e.key == "Enter") {
            addCountry();

        }
        
    }

    const deleteCountry = (id) => {
        fetch(url + `${id}`, {
            method: "DELETE"
        })
    } 

    const handleChange = (event) => {
        event.preventDefault();
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    return(
        <div>
            <div className="top">
                <h1>Welcome</h1>
            </div>
            <div className="list">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Area (km)</th>
                        <th>Edit</th>
                    </tr>
                    
                    {
                        data.map(
                            countries => (
                                <tr>
                                    <td>{countries.id}</td>
                                    <td>{countries.name}</td>
                                    <td>{countries.language}</td>
                                    <td>{countries.area}</td>
                                    <td>
                                        <Link to={`${countries.id}`}><button>Edit</button></Link>
                                        <button onClick={() => deleteCountry(countries.id)}>Delete</button>
                                    </td>
                                </tr>
                                
                            )
                        )
                    }
                    
                </table>

                <div className="forms">
                    <form action="" onKeyPress={handleKeyPress}>
                        <label htmlFor="">Name:</label>
                        <input type="text" name='name' onChange={handleChange} value={values.name}/><br />
                        <label htmlFor="">Lang:</label>
                        <input type="text" name='language' onChange={handleChange} value={values.language}/><br />
                        <label htmlFor="">Area:</label>
                        <input type="text" name='area' onChange={handleChange} value={values.area}/><br />
                    </form>
                </div>
                

                <div className="add-btn">
                    <button onClick={addCountry}>Add</button>
                </div>
            </div>
        </div>
    )


}

export default CountryList