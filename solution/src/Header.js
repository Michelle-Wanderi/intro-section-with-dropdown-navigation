
import React from "react"
import logo from "./images/logo.svg"

export default function Header() {
    return (
        <header>
            <div>
            <img src={logo} alt="logo"></img>
            <nav>
                <button>Features</button>
                <button>Company</button>
                <button>Careers</button>
                <button>About</button>
            </nav>


            </div>
        </header>
    )
}
