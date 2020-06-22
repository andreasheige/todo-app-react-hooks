import React, { useEffect, useRef } from 'react';

const Header = props => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2rem",
    };

    const isInitialMount = useRef(true);
    console.log(isInitialMount);

    useEffect(() => {
        // BG for clicked in GUI.
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
       
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColor;  
        }
    }, [props.headerSpan])

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "15px" }}>
                Simple Todo Application <span id="inH1"></span>
            </h1>
            <p style={{ fontSize: "1.4rem", opacity: "0.5" }}>
                Add new todo/s thru the input field...
            </p>
        </header>
    )
}

export default Header;