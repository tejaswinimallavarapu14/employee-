import axios from "axios";
import { useEffect, useState } from "react";

const ProfessionalDetails = ()=>{

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
                <table cellPadding={5}>
                    {
                        getEmployee.map((employee,index)=>{
                            return(

                                <thead key={index}>
                                    <tr>
                                        <th>Employment Code : </th>
                                        <td>{employee.employmentCode}</td>
                                    </tr>
                                    <tr>
                                        <th>Company Login Mail : </th>
                                        <td>{employee.companyMail}</td>
                                    </tr>
                                    <tr>
                                        <th>Office Phone : </th>
                                        <td>{employee.officePhone}</td>
                                    </tr>
                                    <tr>
                                        <th>Office Address : </th>
                                        <td>{employee.buildingNo},{employee.officeAddressLine1},{employee.officeAddressLine2},{employee.officeCity},
                                            {employee.officeDistrict},{employee.officeState}-{employee.officePincode}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Reporting Manager Name : </th>
                                        <td>{employee.reportingManagerName}</td>
                                    </tr>
                                    <tr>
                                        <th>Reporting Manager Mail : </th>
                                        <td>{employee.reportingManagerMail}</td>
                                    </tr>
                                    <tr>
                                        <th>HR Name : </th>
                                        <td>{employee.hrName}</td>
                                    </tr>
                                    <tr>
                                        <th>Previous Company Name : </th>
                                        <td>{employee.previousCompanyName}</td>
                                    </tr>
                                    <tr>
                                        <th>Previous Company Joining Date : </th>
                                        <td>{employee.previousCompanyJoiningDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Previous Company EndDate : </th>
                                        <td>{employee.previousCompanyEndDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Present Company Joining Date : </th>
                                        <td>{employee.presentCompanyJoiningDate}</td>
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
export default ProfessionalDetails;