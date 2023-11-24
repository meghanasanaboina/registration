import React from 'react';
const styling = {
    headerStyling:{
        marginLeft:'50px',
        backgroundColor:'whitesmoke',
    },
}
class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header style={styling.headerStyling}>
                    <img src="https://www.10000coders.co/assets/10000coders-logo.png?v=1.0" alt="10000coders logo"></img>
                </header>
            </React.Fragment>
        )
    }
}
export default Header;