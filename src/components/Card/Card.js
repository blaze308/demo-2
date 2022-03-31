import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    const [showComp, setShowComp] = useState(false)

    const handleClick = (showComp) => {
        setShowComp(showComp)
    }
  return (
    <div className="card">
        <div className="cardContent">
          <h1><Link to="/counter">Counter Component</Link></h1>
        </div>
        <div className="cardContent">
            <h1><a href="">Paragragh Component</a></h1>
        </div>
        <div className="cardContent">
            <h1><a href="">Navbar Component</a></h1>
        </div>
    </div>
  )
}

export default Card