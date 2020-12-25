import React from 'react';
import "./SidebarOption.css";

function SidebarOption({Iconname,title}) {

    const Display = ()=>{
        
            if(Iconname){
                return (
                    <div className = "conAndTitle">
                        <Iconname/>
                        <h3>{title}</h3>
                    </div>
                 );
            }else{
                return (
                    <div className ="titleOnly">
                        <h3>#{title}</h3>
                    </div>
                );
            }
       
    }
    return (
        <div className = "sideBarOption">
            <Display/>
        </div>
    )
}

export default SidebarOption
