import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div style={{display:'flex'}}>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container mt-3" style={{padding:'20px'}} >

                <p style={{padding:'7px 20px', fontSize:30, background:'#a9a9a9', color:'white', textAlign:'center'}} > Profile </p> 

                            <div className="row" style={{justifyContent:'space-evenly'}}>
                                <div className="card" style={{ width: "18rem" , padding:'70px 10px' }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body" style={{textAlign:'center'}}>
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title" style={{marginBottom: 35}} >{store.student.student.student.registrationNumber}</h5>
                                            <Link to='/student/updateProfile' style={{border:'1px solid #a52a2a', padding:'4px 16px', borderRadius:6 , color:'brown',boxShadow:'3px 3px #ffe1e1'}} >UPDATE PROFILE</Link>
                                        </div>
                                    </div>
                                <div className="col-md-7 text-white" style={{padding:'5px 30px'}} >
                                    <table className="table ">
                                        <tbody className="text-white" style={{background:'#5f9ea0'}}>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Date Of Birth</td>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td>Year</td>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Section</td>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td>Batch</td>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender</td>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td>Father Contact Number</td>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
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

export default Home
