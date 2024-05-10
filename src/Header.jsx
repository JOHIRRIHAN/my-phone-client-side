// import React from 'react'

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div style={{fontSize: "20px", gap: "20px"}}>
        <Link style={{ marginRight: "20px"}} to={'/'}>Home</Link>
        <Link to={'/phones'}>Phones</Link>
    </div>
  )
}

export default Header