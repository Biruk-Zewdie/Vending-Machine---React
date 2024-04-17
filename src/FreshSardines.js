import React from "react"
import "./FreshSardines.css"
import { Link } from "react-router-dom"

const FreshSardines = () => {

    return (
        <div>
            <div className="FreshSardines">
                <h2>
                    You Don't Eat <br /> the Sardines. The <br /> sardines, They <br /> Eat You!
                </h2>
                <Link to="/">Go Back</Link>

            </div>
            <div className="chips-left">
                <img src="/images/pSardines.jpeg" alt="Popular Sardines" />
            </div>
            <div className="chips-right">
                <img src="/images/dSardines.jpeg" alt="Diplomats Sardines" />
            </div>
        </div>
    )
}

export default FreshSardines;