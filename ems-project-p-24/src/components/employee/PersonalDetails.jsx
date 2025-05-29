import axios from "axios";
import { useEffect, useState } from "react";

const PersonalDetails = ()=>{

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
                <br></br>
                <table cellPadding={5}>

                    {
                        getEmployee.map((employee,index)=>{
                            return(
                                <thead key={index}>
                                    <tr>
                                        <th>Employee Name : </th>
                                        <td>{employee.fullName}</td>
                                    </tr>
                                    <tr>
                                        <th>Date of Birth : </th>
                                        <td>{employee.dateOfBirth}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender : </th>
                                        <td>{employee.gender}</td>
                                    </tr>
                                    <tr>
                                        <th>Age : </th>
                                        <td>{employee.age}</td>
                                    </tr>
                                    <tr>
                                        <th>Current Address : </th>
                                        <td>{employee.currentDoorNo},{employee.currentAddressLine1},{employee.currentAddressLine2},{employee.currentCity},
                                            {employee.currentDistrict},{employee.currentState}-{employee.currentPincode}
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Permanent Address : </th>
                                        <td>{employee.permanentDoorNo},{employee.permanentAddressLine1},{employee.permanentAddressLine2},{employee.permanentCity},
                                            {employee.permanentDistrict},{employee.permanentState}-{employee.permanentPincode}
                                        </td>
                                    </tr>
                                    
                                    <tr>
                                        <th>Mobile Number : </th>
                                        <td>{employee.mobileNo}</td>
                                    </tr>
                                    <tr>
                                        <th>Mail ID : </th>
                                        <td>{employee.personalMail}</td>
                                    </tr>
                                    <tr>
                                        <th>Emergency Contact Name : </th>
                                        <td>{employee.emergencyName}</td>
                                    </tr>
                                    <tr>
                                        <th>Emergency Contact Number : </th>
                                        <td>{employee.emergencyMobileNo}</td>
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
export default PersonalDetails;