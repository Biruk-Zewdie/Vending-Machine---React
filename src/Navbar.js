import React from "react"
import "./Navbar.css"

import { Link } from "react-router-dom"


const Navbar = () => {

    return (
        <div >

            <nav className="snacksList">
            <li className="snackList-Home">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="snackList-Soda">
                    <Link to="/soda">
                        Soda
                    </Link>
                </li>
                <li className="snackList-Chips">
                    <Link to="/chips" >
                        Chips
                    </Link>
                </li>
                <li className="snackList-FreshSardines"> 
                    <Link to="/freshSardines">
                        FreshSardines
                    </Link>
                </li>
            </nav>

        </div>


    )

}

export default Navbar;