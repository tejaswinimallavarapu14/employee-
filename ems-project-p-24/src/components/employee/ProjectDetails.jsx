import axios from "axios";
import { useEffect, useState } from "react";

const ProjectDetails =()=>{

    const [getEmployee, setGetEmployee] = useState([]);

    const employmentCode = parseInt(localStorage.getItem("employmentCode"));

    const getOneEmployee = async()=>{
        const {data} = await axios.get(`http://localhost:2424/employee/viewEmployee/${employmentCode}`,{
            headers:{
                "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
            }
        });
        setGetEmployee(data);
    }

    useEffect(()=>{
        getOneEmployee();
    },[])

    return(
        <>
            <div id="employeeDetails">
                <br></br><br></br><br></br><br></br>
                <table cellPadding={5}>
                    {
                        getEmployee.map((employee,index)=>{
                            return(

                                <thead key={index}>
                                    <tr>
                                        <th>Project Code : </th>
                                        <td>{employee.projectCode}</td>
                                    </tr>
                                    <tr>
                                        <th>Project Name : </th>
                                        <td>{employee.projectName}</td>
                                    </tr>
                                    <tr>
                                        <th>Project Start Date : </th>
                                        <td>{employee.projectStartDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Project End Date : </th>
                                        <td>{employee.projectEndDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Project Manager Mail : </th>
                                        <td>{employee.projectManagerMail}</td>
                                    </tr>
                                </thead>
                                
                            );
                        })
                    }
                </table>
            </div>
        </>
    );
}
export default ProjectDetails;