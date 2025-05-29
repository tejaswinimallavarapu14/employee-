import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeHomePage = ()=>{

    const [getEmployeeName, setGetEmployeeName] = useState([]);

    const employmentCode = parseInt(localStorage.getItem("employmentCode"));

    const getOneEmployeename = async()=>{
        const {data} = await axios.get(`http://localhost:2424/employee/viewEmployee/${employmentCode}`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
            }
        });
        setGetEmployeeName(data);
    }

    useEffect(()=>{
        getOneEmployeename();
    },[])

    return(
        <>
            <div id="employeeHome">
                <h3>
                    {
                        getEmployeeName.map((employeeName,index)=>{
                            return(
                                <div key={index}>
                                    <div>Hello {employeeName.fullName},</div>
                                </div>
                            );
                        })
                    }
                    Welcome to the official page of P24 Solutions!
                    <br></br><br></br>
                    We are delighted to have a hardworking and dedicated employee like you as part of our organization.
                    <br></br><br></br>
                    On this page, you can find your personal details, professional details, project details, and financial details related to your role in the organization.
                    <br></br><br></br>
                    If you have any queries, feel free to drop them here.
                    <br></br><br></br>
                    We hope you find this page helpful. Thank you!
                </h3>
            </div>
        </>
    );
}
export default EmployeeHomePage;