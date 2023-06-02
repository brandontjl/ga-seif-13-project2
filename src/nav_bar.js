import React from "react"
import { Link, Router, Routes } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navigation">
            <ul><Link to="/teamdata">Team Stats</Link></ul>
            <ul><Link to="/playerdata">Player Stats</Link></ul>
        </nav>
    )
}

export default NavBar