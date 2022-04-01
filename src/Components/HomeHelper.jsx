import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
import Logo from '../Style/Images/logo.png'
import '../Style/admin.css'


const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid" style={{width:'30%'}} >
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
                                    <button type="button" className="btn"><Link to="/student/updateProfile"><li className='innerLi' >Update Profile</li></Link></button>
                                </li>
                                <li className="nav-item dropdown" >
                                    <a className="nav-link dropdown-toggle dropDownInnerLi" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Academic </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/student/testPerformance">Test Performance</Link>
                                        <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                        <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/studentDetails"><li className='innerLi' >Students</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/StudentChat"><li className='innerLi' >New Conversation ({store.student.newerChats.length})</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/videocall"><li className='innerLi' >Join a Class</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn"><Link to="/student/updatePassword"><li className='innerLi' >Update Password</li></Link></button>
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
