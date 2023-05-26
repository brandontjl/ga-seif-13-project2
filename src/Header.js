import React from "react"


const Header = () => {
    return (
        <>
            <div className="header" >
                < img style={{
                    height: 100,
                    width: 100,
                }} src="https://i.imgur.com/K9AfZE5.png" alt="premlogo" ></img>
                <h1> Premier League stats</h1>
                <div className="topnav">
                    <a className="active" href="#home"></a>
                </div>
            </div >
        </>
    )

}

export default Header