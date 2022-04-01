import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import {newerChats, previousChats} from '../redux/action/studentAction'
import axios from 'axios'
import HomeHelper from '../Components/HomeHelper'
import {Link, useHistory } from 'react-router-dom'

const StudentDetails = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const [name, setName] = useState('')
    const [noDataFound, setNoDataFound] = useState(false)
    const [department, setDepartment] = useState("")
    const [year, setYear] = useState("")
    const [section, setSection] = useState("")
    const [result, setResult] = useState([])


    const url = "http://localhost:5000"
     


    const filterStudentHelper = async () => {

        try {
            const data  = await axios({
                method: 'Post',
                url: url + '/api/student/getAllStudents',
                data: {
                    department,
                    year,
                    section
                }
            })
            setNoDataFound(false)
            setResult(data.data.result)
        }
        catch (err) {
            console.log("Error in student register action", err.message)
            setNoDataFound(true)
        }
    }

    const filterByNameHelper = async () => {
        try {
            const data = await axios({
                method: 'Post',
                url: url + '/api/student/getStudentByName',
                data: {
                    name
                }
            })
            setResult(data.data.result)
            setNoDataFound(false)

        }
        catch (err) {
            console.log("Error in student register action", err.response)

            if(err.response.status === 400){
                setNoDataFound(true)
            }
        }
    }
    

    const formHandler = (e) => {
        let getByName = e.target.attributes[0].name
        e.preventDefault()
        if (getByName === 'class') {
            filterByNameHelper()
        }
        else if (getByName === 'novalidate') {
            filterStudentHelper()
        }
    }
  console.log(noDataFound)
    return (
        <div style={{display:'flex'}}>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container mt-3" style={{padding:'20px'}} >

                <p style={{padding:'7px 20px', fontSize:30, background:'#a9a9a9', color:'white', textAlign:'center'}} > Student Details </p> 

                    <div className="row">
                        <div className="col-md-3 border mt-4">
                            <div className="row mt-3">
                                <div className="col mb-2">
                                    <form className="form-inline" onSubmit={formHandler}>
                                        <div className="form-group ">
                                            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Search by name" type="text" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-block btn-info mt-1 ">Search</button>
                                    </form>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-4 mb-4 ">
                                <div className="col">
                                    <form noValidate onSubmit={formHandler}>
                                        <div className="form-group">
                                            <label htmlFor="branchId">Branch</label>
                                            <select onChange={(e) => setDepartment(e.target.value)} className="form-control" id="bramchId">
                                                <option>Select</option>
                                                <option value="C.S.E">C.S.E</option>
                                                <option value="E.C.E">E.C.E</option>
                                                <option value="E.E.E" >E.E.E</option>
                                                <option value="Mechanical">Mechanical</option>
                                                <option value="Civil">Civil</option>
                                                <option value="I.T">I.T</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="yearId">Year</label>
                                            <select onChange={(e) => setYear(e.target.value)} className="form-control" id="yearId">
                                                <option>Select</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="sectionId">Section</label>
                                            <select onChange={(e) => setSection(e.target.value)} className="form-control" id="sectionId">
                                                <option>Select</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                                <option value="F">F</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-info btn-block">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 border mt-4">



                        {
                            noDataFound ? <h1 style={{textAlign:'center',color:'brown'}} >No Student Found</h1> : 
                        result.length !== 0 &&
                            <div className="row">
                                <div className="col-md-12 m-auto">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Registration Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Chat</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {result.map((obj, index) =>
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{obj.registrationNumber}</td>
                                                    <td>{obj.name}</td>
                                                    <td><Link to={`/student/${obj.registrationNumber}`}>Explore</Link></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
                        }

                        </div>
                    </div>

                    {/* {result.length !== 0 && 
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Registration Number</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Chat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((obj, index) =>
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{obj.registrationNumber}</td>
                                            <td>{obj.name}</td>
                                            <td><Link to={`/student/${obj.registrationNumber}`}>Explore</Link></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>} */}

                </div></> : (history.push('/'))}
            
        </div>
    )
}

export default StudentDetails
