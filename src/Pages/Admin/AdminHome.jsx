import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import AdminHomeHelper from '../../Components/AdminHomeHelper'

const AdminHome = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    return (
        <div style={{display:'flex'}}>
           
            {store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
                <div className="container mt-3" style={{padding:'20px 50px'}} >

                    <p style={{padding:'7px 20px', fontSize:30, background:'#a9a9a9', color:'white', textAlign:'center'}} > Profile </p>

                    <div className="row" style={{display:'flex' , padding:'0px 25px' , justifyContent:'space-around'}} >
                                <div className="">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.admin.admin.avatar} alt="Card image cap" />
                                        <div className="card-body" style={{textAlign:'center'}} >
                                            <h5 className="card-title">{store.admin.admin.name}</h5>
                                            <h5 className="card-title">{store.admin.admin.registrationNumber}</h5>
                                            {/* <Link to='/faculty/updateProfile'>UPDATE PROFILE</Link> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="">

                                    <h4 style={{padding:22,textAlign:'center',fontSize:25,color:'brown'}} > Profile Information </h4>
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{store.admin.admin.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>{store.admin.admin.email}</td>
                                            </tr>
                                            <tr>
                                                <td>Registration Number</td>
                                                <td>{store.admin.admin.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Joining Year</td>
                                                <td>{store.admin.admin.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td>Department</td>
                                                <td>{store.admin.admin.department}</td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number</td>
                                                <td>{store.admin.admin.contactNumber ?
                                                    `0${store.admin.admin.contactNumber}` : "NA"}</td>
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

export default AdminHome
