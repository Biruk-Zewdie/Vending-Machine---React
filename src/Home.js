import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
const Home = () => {

    return (
        <div>
            <div className="Home-Container">
                <h2 className="Home-Header">
                    I'm the <br />Vending Machine.<br /> What Would You <br />Like To Eat?
                </h2>
                <ul className="Home-SnacksList">
                    <li> <Link to="/soda">Soda</Link></li>
                    <li><Link to="/chips">Chips</Link></li>
                    <li><Link to="/freshSardines">Fresh Sardines</Link></li>
                </ul>

            </div>
            <div className="snacks-Image-left">
                <img src="/images/coca-cola.jpeg" alt="coca-cola" />
                <img src="/images/sprite.jpeg" alt="sprite" />
                <img src="/images/Lay's chips.jpeg" alt="Lay's chips" />
            </div>
            <div className="snacks-Image-right">
                <img src="/images/dSardines.jpeg" alt="Diplomats Sardines" />
                <img src="/images/gatorade.jpeg" alt="soda can" />
                <img src="/images/Lays chips BBQ.jpeg" alt="Lays chips BBQ" />
            </div>
        </div>

    )

}

export default Home; 