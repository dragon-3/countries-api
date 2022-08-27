import React, { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import "./Edit.css"
import CountryList from "./CountryList";
import axios from "axios";

function Edit() {

    const { id } = useParams();
    const [data, setData] = useState([])
    const url = `http://localhost:3003/countries/`
    const [values, setValues] = useState({
        name: '',
        language: '',
        area: ''
    })
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(url + `${id}`)
        .then((response) => 
            response.json()
        )
        .then((data) => (
            setData(data), 
            setValues({name: data.name, language: data.language, area: data.area}))
        )
    }

    const handleChange = (event) => {
        event.preventDefault();
        setValues({
            ...values, [event.target.name]: event.target.value
        })
    }

    const update = () => {
        fetch(url + `${id}`, {
            method: "PUT",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: values.name,
                language: values.language,
                area: values.area
            })
        })
        .then(() => {
            navigate("/")
        })
    }


    return(
        <div>
            <div className="content">
                
                <form action="">
                    <label htmlFor="">Country: </label>
                    <input type="text" onChange={handleChange} name="name" value={values.name}/><br />
                    <label htmlFor="">Language: </label>
                    <input type="text" onChange={handleChange} name="language" value={values.language}/><br />
                    <label htmlFor="">Area: </label>
                    <input type="text" onChange={handleChange} name="area" value={values.area}/>
                </form>
                
                <button onClick={update}>Update</button>
            </div>
            
        </div>
    )
}

export default Edit