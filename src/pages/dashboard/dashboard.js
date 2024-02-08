import React from 'react'
import "./dashboard.css"

function dashboard() {
  return (
    <div className="sidebar">
    <div className="logo-container">
      <img src="path/to/your/logo.png" alt="Logo" className="logo" />
      <h2>Admin Dashboard</h2>
    </div>
    <ul>
      <li>
        <img src="path/to/icon1.png" alt="Icon1" className="item-icon" />
        Visualization
      </li>
      <li>
        <img src="path/to/icon2.png" alt="Icon2" className="item-icon" />
        Case
      </li>
      {/* Add icons for other items as needed */}
    </ul>
  </div>
  )
}

export default dashboard