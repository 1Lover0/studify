import React, { useState } from 'react'
import './Navbar.css';

export const Navbar = () => {
    const[active,setActive] = useState('dashboard');
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid navbar-set">
            <a href="#" className="navbar-brand">studify<span>.</span></a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav navbar-menu">
                    <li onClick={()=>setActive("dashboard")} className={active === "dashboard" ? "active" : ""}><i class="fa-regular fa-grid-2"></i> Dashboard</li>
                    <li onClick={()=>setActive("Courses")} className={active === "Courses" ? "active" : ""}>Courses</li>
                    <li onClick={()=>setActive("Events")} className={active === "Events" ? "active" : ""}>Events</li>
                    <li onClick={()=>setActive("Assignment")} className={active === "Assignment" ? "active" : ""}>Assignment</li>
                    <li onClick={()=>setActive("Analytics")} className={active === "Analytics" ? "active" : ""}>Analytics</li>
                    <li onClick={()=>setActive("Messages")} className={active === "Messages" ? "active" : ""}>Messages</li>
                    <li onClick={()=>setActive("Settings")} className={active === "Settings" ? "active" : ""}>Settings</li>
                </ul>
                <ul className='navbar-nav navbar-menu mb-2'>
                    <div className='offer'>
                        <div className='navbar-banner'>
                            <div className='navbar-banner-text'>
                                <div className='navbar-banner-text-1'>76</div>
                                <div className='navbar-banner-text-2'>learning hours<br />keep it up!</div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <li onClick={()=>setActive("out")} className={active === "out" ? "active" : ""}>Log out</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
