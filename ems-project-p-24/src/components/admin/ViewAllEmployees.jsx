import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const ViewAllEmployees = ()=>{

    const [employees, setEmployees] = useState([]);

    const viewEmployees = async()=>{
        const {data} = await axios.get("http://localhost:2424/admin/viewEmployees", {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem(`token`)}`
            }
        });

        setEmployees(data);
    }

    useEffect(()=>{
        viewEmployees();
    },[]);

    const navigate = useNavigate();

    const viewMore = (employee)=>{
        navigate(`/viewMoreDetails/${employee.id}`);
    }

    return(
        <>

            <div id="viewAllEmployeesHead">
                <div id="viewAllEmployees">
                <h1>All Employee Details</h1>
                <table cellSpacing={40}>
                    <thead>
                        <tr>
                            <th>Employment Code</th>
                            <th>Name of the Employee</th>
                            <th>more</th>
                        </tr>
                    </thead>
                {
                    employees.map((employee,index)=>{
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td>{employee.employmentCode}</td>
                                    <td>{employee.fullName}</td>
                                    <td>
                                        <button onClick={()=>viewMore(employee)}>View more</button>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })
                }
                </table>
                </div>
            </div>
        </>
    );
}
export default ViewAllEmployees;