import React from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from "./SidebarOption";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CommentIcon from '@material-ui/icons/Comment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


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
            
            <SidebarOption Iconname ={CommentIcon} title = "Thread"/>
            <SidebarOption Iconname ={InboxIcon} title = "Mentions & Reactions"/>
            <SidebarOption Iconname ={DraftsIcon} title = "Saved Items"/>
            <SidebarOption Iconname ={BookmarkBorderIcon} title = "Channel Browser"/>
            <SidebarOption Iconname ={PeopleAltIcon} title = "People and user groups"/>
            <SidebarOption Iconname ={AppsIcon} title = "Apps"/>
            <SidebarOption Iconname ={FileCopyIcon} title = "File browser"/>
            <SidebarOption Iconname ={ExpandLessIcon} title = "Show less"/>
            
            <SidebarOption title = "SecondOption"/>
        </div>
    )
}

export default Sidebar
