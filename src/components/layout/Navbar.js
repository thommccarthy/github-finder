import React, { Component } from 'react'
import PropTypes from 'prop-types';

//throws error if prop type not a string
export class Navbar extends Component {
    static defaultProps = {
        title: '  Github Finder',
        icon: 'fab fa-github'
    }

//static is a method which can be created inside of a class
static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

    render() {
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    {/* refers to default props */}
                    <i className={ this.props.icon } />  
                    { this.props.title }
                </h1>
            </nav>
        )
    }
}

export default Navbar
