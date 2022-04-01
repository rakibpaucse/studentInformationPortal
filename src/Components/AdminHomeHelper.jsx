import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import Logo from '../Style/Images/logo.png'
import '../Style/admin.css'

const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
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
                        <li className="nav-item active" style={{textAlign:'center'}} >
                            <button type="button" className="btn"><Link to="/admin"><li style={{color:'black',fontSize:20}} >{name.toUpperCase()}</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addFaculty"><li className='innerLi' >ADD FACULTY</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addStudent"><li className='innerLi' >ADD STUDENT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addSubject"><li className='innerLi' >ADD SUBJECT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/addAdmin"><li className='innerLi' >ADD ADMIN</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allFaculties"><li className='innerLi' >OUR FACULTIES</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allStudents"><li className='innerLi' >OUR STUDENTS</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn"><Link to="/admin/allSubject"><li className='innerLi' >SUBJECTS</li></Link></button>
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
