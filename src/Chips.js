import React, { useState } from "react";
import "./Chips.css"
import { Link } from "react-router-dom"

const Chips = () => {
    const [NoOfBags, setNoOfBags] = useState(0)

    const AddBags = () => {
        setNoOfBags(NoOfBags => NoOfBags + 1)
    }

    return (
        <div>
            <div className="Chips">
                <h2> BAGS EATEN: {NoOfBags} </h2>
                <button onClick={AddBags}>Add Bags</button>
                <div><Link to="/">Go Back</Link></div>
            </div>
            <div className="chips-left">
                <img src="/images/Lay's chips.jpeg" alt="Lay's chips" />
            </div>
            <div className="chips-right">
                <img src="/images/Lays chips BBQ.jpeg" alt="Lays chips BBQ" />
            </div>
        </div>
    )

}

export default Chips;