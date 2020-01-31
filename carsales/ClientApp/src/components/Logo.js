import React, { Component } from 'react'

import logo from '../assests/logo.jpg'

class Logo extends Component {
    render() {
        return (
            <img src={logo} alt="Nothing" style={{ height: 100, width: 100 }} />
        )
    }
}

export default Logo