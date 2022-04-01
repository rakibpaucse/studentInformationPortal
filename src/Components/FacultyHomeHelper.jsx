import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import Logo from '../Style/Images/logo.png'
import '../Style/admin.css'


const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid" style={{width:'30%'}} >
            {/* <Header />  */}
  
            <nav className="navbar navbar-expand-lg navbar-light bg-light"  style={{display:'flex',flexDirection:'column'}}>

                        <div style={{ width:'115%', display:'flex', justifyContent:'center', alignItems:'center', margin:'30px 0px 0px', padding:5,background:'black' }}>
                            <img src={Logo} alt="Logo" srcset="" style={{height:28}} />
                            <p style={{textAlign:'center' , fontSize:20 , color:'white' , marginLeft:5 , transform:'translateY(6px)'}} > PrimeAsia <span style={{color:'#ffa700'}}>LMS</span>  </p>
                        </div>                        
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" id='ul'  style={{display:'flex',flexDirection:'column'}}>
                                <li className="nav-item active"  style={{textAlign:'center'}} >
                                    <button type="button" className="btn"><Link to="/home"><li style={{color:'black',fontSize:20}} >{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updateProfile"><li className='innerLi' >UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/attendenceFaculty"><li className='innerLi' >MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/uploadMarks"><li className='innerLi' >UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/videocall"><li className='innerLi' >Make a Class</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/faculty/updatePassword"><li className='innerLi' >UPDATE PASSWORD</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn" id='btn' ><li>LOGOUT</li></button>
                        
                        </div>
                    </nav>
        </div>
    )
}

export default Home
