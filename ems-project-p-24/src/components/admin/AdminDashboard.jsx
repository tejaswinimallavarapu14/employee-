import { Link, Outlet, useNavigate } from "react-router-dom";
import { Drawer } from "@mui/material"
import { useState } from "react";
import "../CSS/AdminDashboard.css";

const AdminDashboard = ()=>{

    const [logoutDrawOpen, setLogoutDrawOpen] = useState(false);

    const navigate = useNavigate();

    const yesLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        localStorage.removeItem("employmentCode");
        navigate("/");
    }

    const noLogout = ()=>{
        setLogoutDrawOpen(false);
    }

    const logoutEffect = (open)=>{
        setLogoutDrawOpen(open);
      }

    return(
        <>
            <div className="navigationBar">

                <h1 className="logo">P24 SOLUTIONS</h1>

                <i className="fa fa-sign-out" onClick={()=>logoutEffect(true)}>Logout</i>

                    <Drawer anchor="top" open={logoutDrawOpen} onClose={()=>logoutEffect(false)} PaperProps={{sx: {height:200}, className:"logoutStyle"}}>
                        <dl>
                            <dd><h5>Are you sure you want to Leave the Site?</h5></dd>
                            <dd>
                                <button onClick={yesLogout} className="btn1">Yes</button>
                                <button onClick={noLogout} className="btn2">No</button>
                            </dd>
                        </dl>
                    </Drawer>
            </div>

            <div id="adminGrid">
                    <div id="adminLinks">
                        <Link to={"adminDashboard/registerEmployee"} className="adminSubLinks"><li style={{paddingLeft:"4vw"}}>Register Employee</li></Link>
                        <Link to={"adminDashboard/viewAllEmployees"} className="adminSubLinks"><li style={{paddingLeft:"4vw"}}>View All Employees</li></Link>
                        <Link to={"adminDashboard/createEmployee"} className="adminSubLinks"><li style={{paddingLeft:"4.5vw"}}>Create Employee</li></Link>
                    </div>
                    <div id="adminOutlet">
                        <Outlet></Outlet>
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
export default AdminDashboard;