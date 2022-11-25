import React from 'react'
import {TrendingUp} from '@material-ui/icons'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <TrendingUp className='sidebarIcon'/>
                        Predictions
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        About the Model
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Companies
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
