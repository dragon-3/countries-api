import React, { useEffect } from 'react';
import {useState} from 'react'
import './CountryList.css'

function CountryList() {

    const [data, setData] = useState([])
    const url = `http://localhost:3003/countries/`

    useEffect(() => {
        getAllData()
    })

    const getAllData = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
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
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                                
                            )
                        )
                    }
                    
                </table>

                <div className="forms">
                    <form action="">
                        <label htmlFor="">Name:</label>
                        <input type="text" /><br />
                        <label htmlFor="">Lang:</label>
                        <input type="text" /><br />
                        <label htmlFor="">Area:</label>
                        <input type="text" /><br />
                    </form>
                </div>
                

                <div className="add-btn">
                    <button>Add</button>
                </div>
            </div>
        </div>
    )


}

export default CountryList