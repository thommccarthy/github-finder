import React from 'react';
//default props needs to be imported
import PropTypes from 'prop-types';

//earlier version was an object
//refactored to function
const Navbar = ({icon, title}) => {  

        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={ icon } />  
                    { title }
                </h1>
            </nav>
        )
    
    }

Navbar.defaultProps = {
    title: '  Github Finder',
    icon: 'fab fa-github'
}

//throws a console error if prop is not a string
Navbar.propTypes = {
title: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired
}

export default Navbar
