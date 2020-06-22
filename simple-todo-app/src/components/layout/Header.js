import React, { Component } from 'react';

class Header extends Component {

    // BG for clicked in GUI.
    componentDidUpdate(prevProps, prevState) {

        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        // When clicked 
        if (prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inH1").innerHTML = "clicked";
            document.getElementById("inH1").style.backgroundColor = bgColor;
        }
    }

    render() {
        const headerStyle = {
            padding: "20px 0",
            lineHeight: "2rem",
        }

        return (
            <header style={headerStyle}>
                <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
                    Simple Todo Application <span id="inH1"></span>
                </h1>
                <p style={{ fontSize: "1.2rem" }}>
                    Add new todo/s thru the input field...
                </p>
            </header>
        )
    }
}

export default Header;