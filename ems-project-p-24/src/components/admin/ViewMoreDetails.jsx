import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material"
import axios from "axios";

const ViewMoreDetails = ()=>{

    const navigate = useNavigate();

    const {id} = useParams();

    const [employee, setEmployee] = useState([]);
    const [deleteDrawOpen, setDeleteDrawOpen] = useState(false);
    
//GET Request
    useEffect(()=>{
        const viewEmployee = async()=>{
            const {data} = await axios.get(`http://localhost:2424/admin/viewEmployee/${id}`, {
                headers : {
                    "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
                }
            });
            setEmployee(data);
        }

        viewEmployee();

    },[]);

    const update = ()=>{
        navigate(`/updateEmployee/${id}`);
    }


//DELETE Request
    const deleteEmployee = async()=>{
        const {data} = await axios.delete(`http://localhost:2424/admin/deleteEmployee/${id}`,{
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
            }
        });
        setDeleteDrawOpen(false);
        navigate("/adminDashboard");
    }

    const noDelete = ()=>{
        setDeleteDrawOpen(false);

    }

    const deleteEffect = (open)=>{
        setDeleteDrawOpen(open);
      }

    return(
        <>

            <div className="navigationBar">
                        
                <i className="fa fa-home" onClick={()=>{navigate("/adminDashboard"), localStorage.removeItem("localData")}}> Home</i>

                <h1 className="logo">P24 SOLUTIONS</h1>
                
            </div>

            
        <div id="viewMoreHead">
            <div id="viewMore">
            <h1 id="innerHead"></h1>
            
                <table cellSpacing={10} id="viewMoreTable">
                
                    {
                        employee.map((employe,index)=>{
                            return(
                                <thead key={index}>
                                    <tr>
                                        <td><h1>More Details</h1></td>
                                    </tr>
                                    <tr>
                                        <td>Employment Code : </td>
                                        <td>{employe.employmentCode}</td>
                                    </tr>
                                    <tr>
                                        <td>Employee Name : </td>
                                        <td>{employe.fullName}</td>
                                    </tr>
                                    <tr>
                                        <td>Company Mail : </td>
                                        <td>{employe.companyMail}</td>
                                    </tr>
                                    <tr>
                                        <td>Reporting Manage Name : </td>
                                        <td>{employe.reportingManagerName}</td>
                                    </tr>
                                    <tr>
                                        <td>Current Project Name : </td>
                                        <td>{employe.projectName}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <button onClick={update}>Update</button>
                                            <button onClick={()=>deleteEffect(true)}>Delete</button>
                                            <Drawer anchor="top" open={deleteDrawOpen} onClose={()=>deleteEffect(false)} PaperProps={{sx: {height:200}, className:"logoutStyle"}}>
                                                <dl>
                                                    <dd><h5>Are you sure you want to Delete Employee?</h5></dd>
                                                    <dd>
                                                        <button onClick={deleteEmployee} className="btn1">Yes</button>
                                                        <button onClick={noDelete} className="btn2">No</button>
                                                    </dd>
                                                </dl>
                                            </Drawer>
                                        </td>
                                    </tr>
                                </thead>
                            );
                        })
                    }
                </table>
            </div>
            </div>
            
            <div className="footer">
                <div className="copyRights">
                    <h5>COPYRIGHTS</h5>
                    <p><i className="fa fa-copyright"></i> 2025 P24 SOLUTIONS Pvt Ltd. All Rights Reserved.</p>
                </div>
                <div className="support">
                    <h5>SUPPORT</h5>
                    <p>About Us <br></br> Contact Us <br></br> FAQ</p>
                </div>
                <div className="getInTouch">
                    <h5>GET IN TOUCH</h5>
                    <p>contact.p24solutions@gmail.com <br></br> 9876543210</p>
                </div>
                <div className="follow">
                    <h5>FOLLOW US ON</h5>
                    <i className="fa fa-facebook"></i> &nbsp;
                    <i className="fa fa-twitter"></i> &nbsp;
                    <i className="fa fa-google-plus"></i> &nbsp;
                    <i className="fa fa-linkedin"></i> &nbsp;
                    <i className="fa fa-youtube-play"></i>

                    <h5>POWERED BY</h5>
                    <h2>P24 SOLUTIONS</h2>
                </div>
            </div>

        </>
    );
}
export default ViewMoreDetails;