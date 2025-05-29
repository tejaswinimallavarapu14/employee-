import axios from "axios";
import { useEffect, useState } from "react";

const FinanceDetails = ()=>{

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
                                        <th>PAN : </th>
                                        <td>{employee.panCard}</td>
                                    </tr>
                                    <tr>
                                        <th>Aadhaar : </th>
                                        <td>{employee.aadhaar}</td>
                                    </tr>
                                    <tr>
                                        <th>Bank Name : </th>
                                        <td>{employee.bankName}</td>
                                    </tr>
                                    <tr>
                                        <th>Branch Name : </th>
                                        <td>{employee.branch}</td>
                                    </tr>
                                    <tr>
                                        <th>IFSC : </th>
                                        <td>{employee.ifsc}</td>
                                    </tr>
                                    <tr>
                                        <th>Basic Pay : </th>
                                        <td>{employee.basicPay}</td>
                                    </tr>
                                    <tr>
                                        <th>Allowances : </th>
                                        <td>{employee.allowances}</td>
                                    </tr>
                                    <tr>
                                        <th>Provident Fund : </th>
                                        <td>{employee.pf}</td>
                                    </tr>
                                    <tr>
                                        <th>Gratuity Fund : </th>
                                        <td>{employee.gf}</td>
                                    </tr>
                                    <tr>
                                        <th>Bonus : </th>
                                        <td>{employee.bonus}</td>
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
export default FinanceDetails;