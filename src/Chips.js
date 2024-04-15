import React, {useState} from "react";
import {Link} from "react-router-dom"

const Chips = () => {
    const [NoOfBags, setNoOfBags] = useState (0)

    const AddBags = () => {
        setNoOfBags (NoOfBags => NoOfBags + 1) 
    }

    return (
        <div>
            <h2> BAGS EATEN: {NoOfBags} </h2>
            <button onClick = {AddBags}>Add Bags</button>
            <div><Link to="/">Go Back</Link></div>
        </div>
    )

}

export default Chips;