import React from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
function Sidebar() {
    return (
        <div className = "sidebar">

            <div className = "sidebarHeader">
                <div className = "comp">
                <h2>Augustos</h2>
                <div className = "statusAndName">
                    <FiberManualRecordIcon/>
                    <h3>Mystic</h3>
                </div>
                </div>
                <CreateIcon/>
            </div>
            
        </div>
    )
}

export default Sidebar
