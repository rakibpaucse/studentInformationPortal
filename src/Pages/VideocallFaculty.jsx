import React from 'react'
import { useSelector } from 'react-redux'
import FacultyHomeHelper from '../Components/FacultyHomeHelper'
import { useHistory } from 'react-router-dom'

const VideoCall = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    const userFullName = store.faculty.faculty.faculty.name
  
    return ( 
        <div style={{display:'flex'}}>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container mt-3" style={{padding:'20px'}} >

                <p 
                    style={{padding:'7px 20px', fontSize:30, background:'#a9a9a9', color:'white', textAlign:'center'}} > 
                Video Call </p> 

                    <div className="row"> 
                    
                            <div id='react-jitsi-container' style={{width:'100%'}}>
                                   
                                    <div id='react-jitsi-frame' >
                                    <iframe 
                                        title="Video Cal"
                                        allow="camera; microphone; display-capture; autoplay; clipboard-write"
                                        src={`https://meet.jit.si/${userFullName}-room`}
                                        name={userFullName} 
                                        id="jitsiConferenceFrame" 
                                        style={{height:'84vh', width: '100%', border: '0px none'}}
                                        allowfullscreen="true">
                                    </iframe>
                                    </div>
                            </div>  

                     </div>

                </div></> : (history.push('/'))}
            
        </div>
    )
}

export default VideoCall
