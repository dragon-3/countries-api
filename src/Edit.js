import React from "react";
import {useParams} from 'react-router-dom';

function Edit() {

    const id = useParams()



    return(
        <div>
            <form action="">
                <label htmlFor="">Country</label>
                <input type="text" />
            </form>
        </div>
    )
}

export default Edit