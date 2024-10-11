import React from 'react'

// Should receive a subtitle and a title subtitle is optional
//Should return 
// header
// h1
// h3 optional
const Header = ({ title, backgroundColor, applyCss }) => {
    const headerStyle = {
        backgroundColor: backgroundColor,
        color: 'black',
        padding: '20px',
        textAlign: 'center',
    }
    return (
        <div style={applyCss ? headerStyle : {}}>
            {title}
        </div>
    )
}

export default Header;