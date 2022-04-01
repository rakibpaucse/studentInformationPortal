import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'


const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    return (
        <div style={{display:'flex'}}>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container mt-3" style={{padding:'20px'}} >
                <p style={{padding:'7px 20px', fontSize:30, background:'#a9a9a9', color:'white', textAlign:'center'}} > Profile </p>

                                    <div className="row" style={{justifyContent:'space-evenly'}}>
                                        <div className="card" style={{ width: "18rem" , padding:'70px 10px' }}>
                                            <img className="card-img-top" src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                        <div className="card-body" style={{textAlign:'center'}}>
                                            <h5 className="card-title">{store.faculty.faculty.faculty.name}</h5>
                                            <h5 className="card-title" style={{marginBottom: 35}} >{store.faculty.faculty.faculty.registrationNumber}</h5>
                                            <Link to='/faculty/updateProfile' style={{border:'1px solid #a52a2a', padding:'4px 16px', borderRadius:6 , color:'brown',boxShadow:'3px 3px #ffe1e1'}}>UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                
                                    <div className="col-md-7 text-white" style={{padding:'5px 30px'}} >
                                    <table className="table border">
                                        <tbody className="text-white" style={{background:'#5f9ea0'}}>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.faculty.faculty.faculty.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.faculty.faculty.faculty.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.faculty.faculty.faculty.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.faculty.faculty.faculty.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Designation</td>
                                                <td>{store.faculty.faculty.faculty.designation}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year</td>
                                                <td>{store.faculty.faculty.faculty.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.faculty.faculty.faculty.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                    store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                               
                        </div>
                    </div>
                </div>

            </> : (history.push('/'))}
           
        </div>


    )
}

export default FacultyInterface
